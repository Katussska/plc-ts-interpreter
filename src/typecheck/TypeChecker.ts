import {AbstractParseTreeVisitor} from 'antlr4ts/tree/AbstractParseTreeVisitor';
import {PLCVisitor} from '../parser/src/grammar/PLCVisitor';
import * as PLCParser from '../parser/src/grammar/PLCParser';
import chalk from 'chalk';

type Type = 'int' | 'float' | 'bool' | 'string' | 'undefined';

interface VariableTable {
  [name: string]: Type;
}

export class TypeChecker
    extends AbstractParseTreeVisitor<Type | void>
    implements PLCVisitor<Type | void>
{
  public errors: { message: string; line: number }[] = [];
  private variables: VariableTable = {};

  defaultResult(): Type | void {
    return;
  }

  // Method to print errors
  public printErrors(): void {
    if (this.errors.length === 0) {
      console.log(chalk.green('No errors found.'));
      return;
    }

    this.errors.forEach(error => {
      console.log(chalk.red(`Error on line ${error.line}: ${error.message}`));
    });
  }

  // Visit methods for the parse tree
  visitProgram(ctx: PLCParser.ProgramContext): void {
    for (let i = 0; i < ctx.statement().length; i++) {
      this.visit(ctx.statement(i));
    }
  }

  // Visit methods for statements
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

  // Variable declaration handler
  visitVarDeclaration(ctx: PLCParser.VarDeclarationContext): void {
    const typeText = ctx.TYPE().text as Type;

    // Handle multiple variable declarations (ID (',' ID)*)
    for (let i = 0; i < ctx.ID().length; i++) {
      const varName = ctx.ID(i).text;

      if (this.variables[varName]) {
        this.addError(`Variable '${varName}' already declared`, ctx.start.line);
      } else {
        this.variables[varName] = typeText;
      }
    }
  }

  // Statement handlers
  visitExpressionStmt(ctx: PLCParser.ExpressionStmtContext): void {
    this.visit(ctx.expression());
  }

  // Read and Write statement handlers
  visitReadStmt(ctx: PLCParser.ReadStmtContext): void {
    // Check that all variables being read into exist
    for (let i = 0; i < ctx.ID().length; i++) {
      const varName = ctx.ID(i).text;

      if (!this.variables[varName]) {
        this.addError(`Cannot read into undeclared variable '${varName}'`, ctx.start.line);
      }
    }
  }

  // Write statement handler
  visitWriteStmt(ctx: PLCParser.WriteStmtContext): void {
    // Check all expressions being written
    for (let i = 0; i < ctx.expression().length; i++) {
      this.visit(ctx.expression(i));
    }
  }

  // Block statement handler
  visitBlock(ctx: PLCParser.BlockContext): void {
    ctx.statement().forEach(stmt => this.visit(stmt));
  }

  // If statement handler
  visitIfStmt(ctx: PLCParser.IfStmtContext): Type {
    // Check that the condition is a boolean
    const conditionType = this.visit(ctx.expression());
    if (conditionType !== 'bool') {
      this.addError(`If condition must be a boolean, got ${conditionType}`, ctx.start.line);
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

    return 'undefined';
  }

  // While statement handler
  visitWhileStmt(ctx: PLCParser.WhileStmtContext): void {
    const condType = this.visit(ctx.expression()) as Type;
    if (condType !== 'bool') {
      this.addError(`Condition in 'while' must be of type bool, got ${condType}`, ctx.start.line);
    }

    this.visit(ctx.statement());
  }

  // Assignment statement handler
  visitAssignment(ctx: PLCParser.AssignmentContext): Type {
    const varName = ctx.ID().text;
    const exprType = this.visit(ctx.expression()) as Type;

    if (!this.variables[varName]) {
      this.addError(`Variable '${varName}' not declared`, ctx.start.line);
      return 'undefined';
    }

    // Check type compatibility for assignment
    if (this.variables[varName] !== exprType && exprType !== 'undefined') {
      // Special case: Allow int to float conversion but not float to int
      if (!(this.variables[varName] === 'float' && exprType === 'int')) {
        this.addError(`Type mismatch in assignment to '${varName}': expected ${this.variables[varName]}, got ${exprType}`, ctx.start.line);
        return 'undefined';
      }
    }

    return this.variables[varName];
  }

  // Expression handlers
  visitConcat(ctx: PLCParser.ConcatContext): Type {
    const left = this.visit(ctx.expression(0)) as Type;
    const right = this.visit(ctx.expression(1)) as Type;

    if (left === 'string' && right === 'string') {
      return 'string';
    } else {
      this.addError(`Concatenation operator '.' requires string operands, got ${left} and ${right}`, ctx.start.line);
      return 'undefined';
    }
  }

  // Arithmetic and logical operators
  visitMulDivMod(ctx: PLCParser.MulDivModContext): Type {
    const left = this.visit(ctx.expression(0)) as Type;
    const right = this.visit(ctx.expression(1)) as Type;

    // Get the operator directly from the text in between the expressions
    let op = '';
    if (ctx.children && ctx.children.length > 1) {
      op = ctx.children[1].text; // The operator is the second child (index 1)
    }

    // Special handling for modulo operator
    if (op === '%') {
      if (left === 'int' && right === 'int') {
        return 'int';
      } else {
        this.addError(`Modulo operator '%' requires integer operands, got ${left} and ${right}`, ctx.start.line);
        return 'undefined';
      }
    }

    // For * and / operators
    if (
        (left === 'int' || left === 'float') &&
        (right === 'int' || right === 'float')
    ) {
      // If either operand is float, result is float
      if (left === 'float' || right === 'float') {
        return 'float';
      } else {
        return 'int';
      }
    } else {
      this.addError(`Invalid operand types for ${op}: ${left} and ${right}, expected numeric types`, ctx.start.line);
      return 'undefined';
    }
  }

  // Addition and subtraction operator handler
  visitAddSub(ctx: PLCParser.AddSubContext): Type {
    const left = this.visit(ctx.expression(0)) as Type;
    const right = this.visit(ctx.expression(1)) as Type;

    // Get the operator directly from the text in between the expressions
    let op = '';
    if (ctx.children && ctx.children.length > 1) {
      op = ctx.children[1].text; // The operator is the second child (index 1)
    }

    if (
        (left === 'int' || left === 'float') &&
        (right === 'int' || right === 'float')
    ) {
      // If either operand is float, result is float
      if (left === 'float' || right === 'float') {
        return 'float';
      } else {
        return 'int';
      }
    } else {
      this.addError(`Invalid operand types for ${op}: ${left} and ${right}, expected numeric types`, ctx.start.line);
      return 'undefined';
    }
  }

  // Comparison operators handler
  visitRelOp(ctx: PLCParser.RelOpContext): Type {
    const left = this.visit(ctx.expression(0)) as Type;
    const right = this.visit(ctx.expression(1)) as Type;

    // Get the operator directly from the text in between the expressions
    let op = '';
    if (ctx.children && ctx.children.length > 1) {
      op = ctx.children[1].text; // The operator is the second child (index 1)
    }

    if (
        (left === 'int' || left === 'float') &&
        (right === 'int' || right === 'float')
    ) {
      return 'bool';
    } else {
      this.addError(`Invalid operand types for comparison ${op}: ${left} and ${right}, expected numeric types`, ctx.start.line);
      return 'undefined';
    }
  }

  // Equality and inequality operator handler
  visitEqNeq(ctx: PLCParser.EqNeqContext): Type {
    const left = this.visit(ctx.expression(0)) as Type;
    const right = this.visit(ctx.expression(1)) as Type;

    // Get the operator directly from the text in between the expressions
    let op = '';
    if (ctx.children && ctx.children.length > 1) {
      op = ctx.children[1].text; // The operator is the second child (index 1)
    }

    // Allow comparisons between int and float
    if (
        (left === 'int' || left === 'float') &&
        (right === 'int' || right === 'float')
    ) {
      return 'bool';
    } else if (left === right && left !== 'undefined') {
      return 'bool';
    } else {
      this.addError(`Invalid operand types for equality check ${op}: ${left} and ${right}, they must be compatible types`, ctx.start.line);
      return 'undefined';
    }
  }

  // Logical operators handler
  visitAnd(ctx: PLCParser.AndContext): Type {
    const left = this.visit(ctx.expression(0)) as Type;
    const right = this.visit(ctx.expression(1)) as Type;

    if (left === 'bool' && right === 'bool') {
      return 'bool';
    } else {
      this.addError(`Logical AND requires boolean operands, got ${left} and ${right}`, ctx.start.line);
      return 'undefined';
    }
  }

  // Logical OR operator handler
  visitOr(ctx: PLCParser.OrContext): Type {
    const left = this.visit(ctx.expression(0)) as Type;
    const right = this.visit(ctx.expression(1)) as Type;

    if (left === 'bool' && right === 'bool') {
      return 'bool';
    } else {
      this.addError(`Logical OR requires boolean operands, got ${left} and ${right}`, ctx.start.line);
      return 'undefined';
    }
  }

  // Logical NOT operator handler
  visitNot(ctx: PLCParser.NotContext): Type {
    const exprType = this.visit(ctx.expression()) as Type;
    if (exprType !== 'bool') {
      this.addError(`Logical NOT requires boolean operand, got ${exprType}`, ctx.start.line);
      return 'undefined';
    }
    return 'bool';
  }

  // Unary minus operator handler
  visitUnaryMinus(ctx: PLCParser.UnaryMinusContext): Type {
    const exprType = this.visit(ctx.expression()) as Type;
    if (exprType !== 'int' && exprType !== 'float') {
      this.addError(`Unary minus requires numeric operand, got ${exprType}`, ctx.start.line);
      return 'undefined';
    }
    return exprType;
  }

  // Parentheses handler
  visitParens(ctx: PLCParser.ParensContext): Type {
    return this.visit(ctx.expression()) as Type;
  }

  // Literal expression handler
  visitLiteralExpr(ctx: PLCParser.LiteralExprContext): Type {
    return this.visit(ctx.literal()) as Type;
  }

  // Variable expression handler
  visitVarExpr(ctx: PLCParser.VarExprContext): Type {
    const name = ctx.ID().text;
    const t = this.variables[name];
    if (!t) {
      this.addError(`Variable '${name}' not declared`, ctx.start.line);
      return 'undefined';
    }
    return t;
  }

  // Literal type handlers
  visitIntLiteral(ctx: PLCParser.IntLiteralContext): Type {
    return 'int';
  }

  visitFloatLiteral(ctx: PLCParser.FloatLiteralContext): Type {
    return 'float';
  }

  visitBoolLiteral(ctx: PLCParser.BoolLiteralContext): Type {
    return 'bool';
  }

  visitStringLiteral(ctx: PLCParser.StringLiteralContext): Type {
    return 'string';
  }

  // Method to add an error with line number
  private addError(message: string, line: number): void {
    this.errors.push({ message, line });
  }
}