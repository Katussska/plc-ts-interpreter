import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { PLCVisitor } from "../parser/src/grammar/PLCVisitor";
import { ParserRuleContext } from "antlr4ts";
import * as PLCParser from "../parser/src/grammar/PLCParser";
import {
  ProgramContext,
  StatementContext,
  VariableDeclarationContext,
  AssignmentContext,
  IfStatementContext,
  WhileStatementContext,
  ExpressionContext,
  BinaryExprContext, // Přidej tento import
  ParenExprContext, // Přidej tento import
  BooleanLiteralContext, // Přidej tento import
  IntLiteralContext, // Přidej tento import
  IdentifierExprContext, // Přidej tento import
} from "../parser/src/grammar/PLCParser";

type Type = "int" | "bool" | "undefined";

interface VariableTable {
  [name: string]: Type;
}

export class TypeChecker
  extends AbstractParseTreeVisitor<Type | void>
  implements PLCVisitor<Type | void>
{
  private variables: VariableTable = {};
  public errors: string[] = [];

  defaultResult(): Type | void {
    return;
  }

  visitProgram(ctx: ProgramContext): void {
    for (const stmt of ctx.statement()) {
      this.visit(stmt);
    }
  }

  visitStatement(ctx: StatementContext): void {
    if (ctx.assignment()) return this.visit(ctx.assignment()!) as void;
    if (ctx.variableDeclaration())
      return this.visit(ctx.variableDeclaration()!) as void;
    if (ctx.ifStatement()) return this.visit(ctx.ifStatement()!) as void;
    if (ctx.whileStatement()) return this.visit(ctx.whileStatement()!) as void;
    if (ctx.block()) return this.visit(ctx.block()!) as void;
  }

  visitVariableDeclaration(ctx: VariableDeclarationContext): void {
    const varName = ctx.IDENTIFIER().text;
    const typeText = ctx.type().text as Type;
    const exprType = this.visit(ctx.expression()) as Type;

    if (this.variables[varName]) {
      this.errors.push(`Variable '${varName}' already declared`);
    } else if (exprType !== typeText) {
      this.errors.push(
        `Type mismatch in declaration of '${varName}': expected ${typeText}, got ${exprType}`
      );
    }

    this.variables[varName] = typeText;
  }

  visitAssignment(ctx: AssignmentContext): void {
    const varName = ctx.IDENTIFIER().text;
    const exprType = this.visit(ctx.expression()) as Type;

    if (!this.variables[varName]) {
      this.errors.push(`Variable '${varName}' not declared`);
    } else if (this.variables[varName] !== exprType) {
      this.errors.push(
        `Type mismatch in assignment to '${varName}': expected ${this.variables[varName]}, got ${exprType}`
      );
    }
  }

  visitIfStatement(ctx: IfStatementContext): void {
    const condType = this.visit(ctx.expression());
    if (condType !== "bool") {
      this.errors.push(
        `Condition in 'if' must be of type bool, got ${condType}`
      );
    }

    this.visit(ctx.block(0));
    if (ctx.block(1)) {
      this.visit(ctx.block(1));
    }
  }

  visitWhileStatement(ctx: WhileStatementContext): void {
    const condType = this.visit(ctx.expression());
    if (condType !== "bool") {
      this.errors.push(
        `Condition in 'while' must be of type bool, got ${condType}`
      );
    }

    this.visit(ctx.block());
  }

  visitExpression(ctx: ExpressionContext): Type {
    // Check if the context is for a boolean literal
    if (ctx instanceof PLCParser.BooleanLiteralContext) return "bool";
    // Check if the context is for an integer literal
    if (ctx instanceof PLCParser.IntLiteralContext) return "int";

    // Check if the context is for an identifier expression
    if (ctx instanceof PLCParser.IdentifierExprContext) {
      const name = ctx.IDENTIFIER().text;
      const t = this.variables[name];
      if (!t) {
        this.errors.push(`Variable '${name}' not declared`);
        return "undefined"; // Return a fallback type for error handling
      }
      return t;
    }

    // Handle binary expressions (e.g., +, -, *, /, and, or, etc.)
    if (ctx instanceof PLCParser.BinaryExprContext) {
      const left = this.visit(ctx.expression(0));
      const right = this.visit(ctx.expression(1));
      const op = ctx._op.text;

      // Handle arithmetic operators (+, -, *, /)
      if (["+", "-", "*", "/"].includes(op)) {
        if ((left === "int" || left === "bool") && left === right) {
          return left;
        } else {
          this.errors.push(
            `Invalid operand types for ${op}: ${left} and ${right}`
          );
          return "undefined"; // Return a fallback type for error handling
        }
      }

      // Handle logical operators (and, or)
      if (["and", "or"].includes(op)) {
        if (left === "bool" && right === "bool") return "bool";
        else {
          this.errors.push(
            `Invalid boolean operands for ${op}: ${left} and ${right}`
          );
          return "undefined"; // Return a fallback type for error handling
        }
      }

      // Handle comparison operators (==, !=, <, >, <=, >=)
      if (["==", "!=", "<", ">", "<=", ">="].includes(op)) {
        if (left === right) return "bool";
        else {
          this.errors.push(
            `Invalid operand types for ${op}: ${left} and ${right}`
          );
          return "undefined"; // Return a fallback type for error handling
        }
      }
    }

    // Handle parenthesis (return the type of the expression inside)
    if (ctx instanceof PLCParser.ParenExprContext) {
      return (this.visit(ctx.expression()) as Type) || "undefined";
    }

    // Handle other expression types as needed
    this.errors.push("Unsupported expression type encountered");
    return "undefined"; // Return a fallback type for error handling
  }
}
