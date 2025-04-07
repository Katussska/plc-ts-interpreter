import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { PLCVisitor } from "../parser/src/grammar/PLCVisitor";
import { ParserRuleContext } from "antlr4ts";
import * as PLCParser from "../parser/src/grammar/PLCParser";

type Type = "int" | "float" | "bool" | "string" | "undefined";

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

  visitProgram(ctx: PLCParser.ProgramContext): void {
    for (let i = 0; i < ctx.statement().length; i++) {
      this.visit(ctx.statement(i));
    }
  }

  visitStatement(ctx: PLCParser.StatementContext): void {
    // Visit all possible statement types
    if (ctx.varDeclaration()) {
      this.visit(ctx.varDeclaration()!);
    } else if (ctx.expressionStmt()) {
      this.visit(ctx.expressionStmt()!);
    } else if (ctx.readStmt()) {
      this.visit(ctx.readStmt()!);
    } else if (ctx.writeStmt()) {
      this.visit(ctx.writeStmt()!);
    } else if (ctx.block()) {
      this.visit(ctx.block()!);
    } else if (ctx.ifStmt()) {
      this.visit(ctx.ifStmt()!);
    } else if (ctx.whileStmt()) {
      this.visit(ctx.whileStmt()!);
    }
  }

  visitVarDeclaration(ctx: PLCParser.VarDeclarationContext): void {
    const typeText = ctx.TYPE().text as Type;

    // Handle multiple variable declarations (ID (',' ID)*)
    for (let i = 0; i < ctx.ID().length; i++) {
      const varName = ctx.ID(i).text;

      if (this.variables[varName]) {
        this.errors.push(`Variable '${varName}' already declared`);
      } else {
        this.variables[varName] = typeText;
      }
    }
  }

  visitExpressionStmt(ctx: PLCParser.ExpressionStmtContext): void {
    this.visit(ctx.expression());
  }

  visitReadStmt(ctx: PLCParser.ReadStmtContext): void {
    // Check that all variables being read into exist
    for (let i = 0; i < ctx.ID().length; i++) {
      const varName = ctx.ID(i).text;

      if (!this.variables[varName]) {
        this.errors.push(`Cannot read into undeclared variable '${varName}'`);
      }
    }
  }

  visitWriteStmt(ctx: PLCParser.WriteStmtContext): void {
    // Check all expressions being written
    for (let i = 0; i < ctx.expression().length; i++) {
      this.visit(ctx.expression(i));
    }
  }

  visitBlock(ctx: PLCParser.BlockContext): void {
    ctx.statement().forEach((stmt) => this.visit(stmt));
  }

  visitIfStmt(ctx: PLCParser.IfStmtContext): Type {
    // Check that the condition is a boolean
    const conditionType = this.visit(ctx.expression());
    if (conditionType !== "bool") {
      throw new Error(`If condition must be a boolean, got ${conditionType}`);
    }

    // Check the statement(s) if they exist
    const statements = ctx.statement();
    if (statements && statements.length > 0) {
      this.visit(statements[0]);

      // Check if there's an else statement
      if (statements.length > 1) {
        this.visit(statements[1]);
      }
    }

    return "undefined";
  }

  visitWhileStmt(ctx: PLCParser.WhileStmtContext): void {
    const condType = this.visit(ctx.expression()) as Type;
    if (condType !== "bool") {
      this.errors.push(
        `Condition in 'while' must be of type bool, got ${condType}`
      );
    }

    this.visit(ctx.statement());
  }

  // Expression handlers
  visitAssignment(ctx: PLCParser.AssignmentContext): Type {
    const varName = ctx.ID().text;
    const exprType = this.visit(ctx.expression()) as Type;

    if (!this.variables[varName]) {
      this.errors.push(`Variable '${varName}' not declared`);
      return "undefined";
    }

    // Check type compatibility for assignment
    if (this.variables[varName] !== exprType && exprType !== "undefined") {
      // Special case: Allow int to float conversion but not float to int
      if (!(this.variables[varName] === "float" && exprType === "int")) {
        this.errors.push(
          `Type mismatch in assignment to '${varName}': expected ${this.variables[varName]}, got ${exprType}`
        );
        return "undefined";
      }
    }

    return this.variables[varName];
  }

  visitConcat(ctx: PLCParser.ConcatContext): Type {
    const left = this.visit(ctx.expression(0)) as Type;
    const right = this.visit(ctx.expression(1)) as Type;

    if (left === "string" && right === "string") {
      return "string";
    } else {
      this.errors.push(
        `Concatenation operator '.' requires string operands, got ${left} and ${right}`
      );
      return "undefined";
    }
  }

  visitMulDivMod(ctx: PLCParser.MulDivModContext): Type {
    const left = this.visit(ctx.expression(0)) as Type;
    const right = this.visit(ctx.expression(1)) as Type;

    // Get the operator directly from the text in between the expressions
    let op = "";
    if (ctx.children && ctx.children.length > 1) {
      op = ctx.children[1].text; // The operator is the second child (index 1)
    }

    // Special handling for modulo operator
    if (op === "%") {
      if (left === "int" && right === "int") {
        return "int";
      } else {
        this.errors.push(
          `Modulo operator '%' requires integer operands, got ${left} and ${right}`
        );
        return "undefined";
      }
    }

    // For * and / operators
    if (
      (left === "int" || left === "float") &&
      (right === "int" || right === "float")
    ) {
      // If either operand is float, result is float
      if (left === "float" || right === "float") {
        return "float";
      } else {
        return "int";
      }
    } else {
      this.errors.push(
        `Invalid operand types for ${op}: ${left} and ${right}, expected numeric types`
      );
      return "undefined";
    }
  }

  visitAddSub(ctx: PLCParser.AddSubContext): Type {
    const left = this.visit(ctx.expression(0)) as Type;
    const right = this.visit(ctx.expression(1)) as Type;

    // Get the operator directly from the text in between the expressions
    let op = "";
    if (ctx.children && ctx.children.length > 1) {
      op = ctx.children[1].text; // The operator is the second child (index 1)
    }

    if (
      (left === "int" || left === "float") &&
      (right === "int" || right === "float")
    ) {
      // If either operand is float, result is float
      if (left === "float" || right === "float") {
        return "float";
      } else {
        return "int";
      }
    } else {
      this.errors.push(
        `Invalid operand types for ${op}: ${left} and ${right}, expected numeric types`
      );
      return "undefined";
    }
  }

  visitRelOp(ctx: PLCParser.RelOpContext): Type {
    const left = this.visit(ctx.expression(0)) as Type;
    const right = this.visit(ctx.expression(1)) as Type;

    // Get the operator directly from the text in between the expressions
    let op = "";
    if (ctx.children && ctx.children.length > 1) {
      op = ctx.children[1].text; // The operator is the second child (index 1)
    }

    if (
      (left === "int" || left === "float") &&
      (right === "int" || right === "float")
    ) {
      return "bool";
    } else {
      this.errors.push(
        `Invalid operand types for comparison ${op}: ${left} and ${right}, expected numeric types`
      );
      return "undefined";
    }
  }

  visitEqNeq(ctx: PLCParser.EqNeqContext): Type {
    const left = this.visit(ctx.expression(0)) as Type;
    const right = this.visit(ctx.expression(1)) as Type;

    // Get the operator directly from the text in between the expressions
    let op = "";
    if (ctx.children && ctx.children.length > 1) {
      op = ctx.children[1].text; // The operator is the second child (index 1)
    }

    // Allow comparisons between int and float
    if (
      (left === "int" || left === "float") &&
      (right === "int" || right === "float")
    ) {
      return "bool";
    } else if (left === right && left !== "undefined") {
      return "bool";
    } else {
      this.errors.push(
        `Invalid operand types for equality check ${op}: ${left} and ${right}, they must be compatible types`
      );
      return "undefined";
    }
  }

  visitAnd(ctx: PLCParser.AndContext): Type {
    const left = this.visit(ctx.expression(0)) as Type;
    const right = this.visit(ctx.expression(1)) as Type;

    if (left === "bool" && right === "bool") {
      return "bool";
    } else {
      this.errors.push(
        `Logical AND requires boolean operands, got ${left} and ${right}`
      );
      return "undefined";
    }
  }

  visitOr(ctx: PLCParser.OrContext): Type {
    const left = this.visit(ctx.expression(0)) as Type;
    const right = this.visit(ctx.expression(1)) as Type;

    if (left === "bool" && right === "bool") {
      return "bool";
    } else {
      this.errors.push(
        `Logical OR requires boolean operands, got ${left} and ${right}`
      );
      return "undefined";
    }
  }

  visitNot(ctx: PLCParser.NotContext): Type {
    const exprType = this.visit(ctx.expression()) as Type;
    if (exprType !== "bool") {
      this.errors.push(`Logical NOT requires boolean operand, got ${exprType}`);
      return "undefined";
    }
    return "bool";
  }

  visitUnaryMinus(ctx: PLCParser.UnaryMinusContext): Type {
    const exprType = this.visit(ctx.expression()) as Type;
    if (exprType !== "int" && exprType !== "float") {
      this.errors.push(`Unary minus requires numeric operand, got ${exprType}`);
      return "undefined";
    }
    return exprType;
  }

  visitParens(ctx: PLCParser.ParensContext): Type {
    return this.visit(ctx.expression()) as Type;
  }

  visitLiteralExpr(ctx: PLCParser.LiteralExprContext): Type {
    return this.visit(ctx.literal()) as Type;
  }

  visitVarExpr(ctx: PLCParser.VarExprContext): Type {
    const name = ctx.ID().text;
    const t = this.variables[name];
    if (!t) {
      this.errors.push(`Variable '${name}' not declared`);
      return "undefined";
    }
    return t;
  }

  // Literal type handlers
  visitIntLiteral(ctx: PLCParser.IntLiteralContext): Type {
    return "int";
  }

  visitFloatLiteral(ctx: PLCParser.FloatLiteralContext): Type {
    return "float";
  }

  visitBoolLiteral(ctx: PLCParser.BoolLiteralContext): Type {
    return "bool";
  }

  visitStringLiteral(ctx: PLCParser.StringLiteralContext): Type {
    return "string";
  }
}
