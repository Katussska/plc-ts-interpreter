import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { ParseTree } from "antlr4ts/tree/ParseTree";
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
  BlockContext,
  BinaryExprContext,
  NotExprContext,
  ParenExprContext,
  BooleanLiteralContext,
  IntLiteralContext,
  IdentifierExprContext,
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
    for (let i = 0; i < ctx.statement().length; i++) {
      this.visit(ctx.statement(i));
    }
  }

  visitStatement(ctx: StatementContext): void {
    if (ctx.assignment()) {
      this.visit(ctx.assignment()!);
    } else if (ctx.variableDeclaration()) {
      this.visit(ctx.variableDeclaration()!);
    } else if (ctx.ifStatement()) {
      this.visit(ctx.ifStatement()!);
    } else if (ctx.whileStatement()) {
      this.visit(ctx.whileStatement()!);
    } else if (ctx.block()) {
      this.visit(ctx.block()!);
    }
  }

  visitBlock(ctx: BlockContext): void {
    ctx.statement().forEach(stmt => this.visit(stmt));
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
    const condType = this.visit(ctx.expression()) as Type;
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
    const condType = this.visit(ctx.expression()) as Type;
    if (condType !== "bool") {
      this.errors.push(
          `Condition in 'while' must be of type bool, got ${condType}`
      );
    }

    this.visit(ctx.block());
  }

  // Implementace jednotlivých typů výrazů
  visitBinaryExpr(ctx: BinaryExprContext): Type {
    const left = this.visit(ctx.expression(0)) as Type;
    const right = this.visit(ctx.expression(1)) as Type;
    const op = ctx._op?.text || "";  // Přidáme bezpečný přístup a fallback na prázdný řetězec

    const mathOperators = ["+", "-", "*", "/"];
    const logicalOperators = ["and", "or"];
    const comparisonOperators = ["==", "!=", "<", ">", "<=", ">="];

    if (mathOperators.includes(op)) {
      if (left === "int" && right === "int") {
        return "int";
      } else {
        this.errors.push(
            `Invalid operand types for ${op}: ${left} and ${right}, expected int`
        );
        return "undefined";
      }
    }

    if (logicalOperators.includes(op)) {
      if (left === "bool" && right === "bool") {
        return "bool";
      } else {
        this.errors.push(
            `Invalid boolean operands for ${op}: ${left} and ${right}, expected bool`
        );
        return "undefined";
      }
    }

    if (comparisonOperators.includes(op)) {
      if (left === right && left !== "undefined") {
        return "bool";
      } else {
        this.errors.push(
            `Invalid operand types for ${op}: ${left} and ${right}, they must be of the same type`
        );
        return "undefined";
      }
    }

    this.errors.push(`Unknown operator: ${op}`);
    return "undefined";
  }

  visitNotExpr(ctx: NotExprContext): Type {
    const exprType = this.visit(ctx.expression()) as Type;
    if (exprType !== "bool") {
      this.errors.push(`Operand of 'not' must be of type bool, got ${exprType}`);
      return "undefined";
    }
    return "bool";
  }

  visitParenExpr(ctx: ParenExprContext): Type {
    return this.visit(ctx.expression()) as Type;
  }

  visitBooleanLiteral(ctx: BooleanLiteralContext): Type {
    return "bool";
  }

  visitIntLiteral(ctx: IntLiteralContext): Type {
    return "int";
  }

  visitIdentifierExpr(ctx: IdentifierExprContext): Type {
    const name = ctx.IDENTIFIER().text;
    const t = this.variables[name];
    if (!t) {
      this.errors.push(`Variable '${name}' not declared`);
      return "undefined";
    }
    return t;
  }
}