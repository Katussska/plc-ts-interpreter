// Generated from src/grammar/PLC.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { AssignmentContext } from './PLCParser';
import { ConcatContext } from './PLCParser';
import { MulDivModContext } from './PLCParser';
import { AddSubContext } from './PLCParser';
import { RelOpContext } from './PLCParser';
import { EqNeqContext } from './PLCParser';
import { AndContext } from './PLCParser';
import { OrContext } from './PLCParser';
import { NotContext } from './PLCParser';
import { UnaryMinusContext } from './PLCParser';
import { ParensContext } from './PLCParser';
import { LiteralExprContext } from './PLCParser';
import { VarExprContext } from './PLCParser';
import { MultiAssignmentContext } from './PLCParser';
import { IntLiteralContext } from './PLCParser';
import { FloatLiteralContext } from './PLCParser';
import { BoolLiteralContext } from './PLCParser';
import { StringLiteralContext } from './PLCParser';
import { ProgramContext } from './PLCParser';
import { StatementContext } from './PLCParser';
import { VarDeclarationContext } from './PLCParser';
import { ExpressionStmtContext } from './PLCParser';
import { ReadStmtContext } from './PLCParser';
import { WriteStmtContext } from './PLCParser';
import { BlockContext } from './PLCParser';
import { IfStmtContext } from './PLCParser';
import { WhileStmtContext } from './PLCParser';
import { ExpressionContext } from './PLCParser';
import { LiteralContext } from './PLCParser';

/**
 * This interface defines a complete listener for a parse tree produced by
 * `PLCParser`.
 */
export interface PLCListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by the `assignment`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  enterAssignment?: (ctx: AssignmentContext) => void;
  /**
   * Exit a parse tree produced by the `assignment`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  exitAssignment?: (ctx: AssignmentContext) => void;

  /**
   * Enter a parse tree produced by the `concat`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  enterConcat?: (ctx: ConcatContext) => void;
  /**
   * Exit a parse tree produced by the `concat`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  exitConcat?: (ctx: ConcatContext) => void;

  /**
   * Enter a parse tree produced by the `mulDivMod`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  enterMulDivMod?: (ctx: MulDivModContext) => void;
  /**
   * Exit a parse tree produced by the `mulDivMod`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  exitMulDivMod?: (ctx: MulDivModContext) => void;

  /**
   * Enter a parse tree produced by the `addSub`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  enterAddSub?: (ctx: AddSubContext) => void;
  /**
   * Exit a parse tree produced by the `addSub`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  exitAddSub?: (ctx: AddSubContext) => void;

  /**
   * Enter a parse tree produced by the `relOp`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  enterRelOp?: (ctx: RelOpContext) => void;
  /**
   * Exit a parse tree produced by the `relOp`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  exitRelOp?: (ctx: RelOpContext) => void;

  /**
   * Enter a parse tree produced by the `eqNeq`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  enterEqNeq?: (ctx: EqNeqContext) => void;
  /**
   * Exit a parse tree produced by the `eqNeq`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  exitEqNeq?: (ctx: EqNeqContext) => void;

  /**
   * Enter a parse tree produced by the `and`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  enterAnd?: (ctx: AndContext) => void;
  /**
   * Exit a parse tree produced by the `and`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  exitAnd?: (ctx: AndContext) => void;

  /**
   * Enter a parse tree produced by the `or`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  enterOr?: (ctx: OrContext) => void;
  /**
   * Exit a parse tree produced by the `or`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  exitOr?: (ctx: OrContext) => void;

  /**
   * Enter a parse tree produced by the `not`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  enterNot?: (ctx: NotContext) => void;
  /**
   * Exit a parse tree produced by the `not`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  exitNot?: (ctx: NotContext) => void;

  /**
   * Enter a parse tree produced by the `unaryMinus`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  enterUnaryMinus?: (ctx: UnaryMinusContext) => void;
  /**
   * Exit a parse tree produced by the `unaryMinus`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  exitUnaryMinus?: (ctx: UnaryMinusContext) => void;

  /**
   * Enter a parse tree produced by the `parens`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  enterParens?: (ctx: ParensContext) => void;
  /**
   * Exit a parse tree produced by the `parens`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  exitParens?: (ctx: ParensContext) => void;

  /**
   * Enter a parse tree produced by the `literalExpr`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  enterLiteralExpr?: (ctx: LiteralExprContext) => void;
  /**
   * Exit a parse tree produced by the `literalExpr`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  exitLiteralExpr?: (ctx: LiteralExprContext) => void;

  /**
   * Enter a parse tree produced by the `varExpr`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  enterVarExpr?: (ctx: VarExprContext) => void;
  /**
   * Exit a parse tree produced by the `varExpr`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  exitVarExpr?: (ctx: VarExprContext) => void;

  /**
   * Enter a parse tree produced by the `multiAssignment`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  enterMultiAssignment?: (ctx: MultiAssignmentContext) => void;
  /**
   * Exit a parse tree produced by the `multiAssignment`
   * labeled alternative in `PLCParser.expression`.
   * @param ctx the parse tree
   */
  exitMultiAssignment?: (ctx: MultiAssignmentContext) => void;

  /**
   * Enter a parse tree produced by the `intLiteral`
   * labeled alternative in `PLCParser.literal`.
   * @param ctx the parse tree
   */
  enterIntLiteral?: (ctx: IntLiteralContext) => void;
  /**
   * Exit a parse tree produced by the `intLiteral`
   * labeled alternative in `PLCParser.literal`.
   * @param ctx the parse tree
   */
  exitIntLiteral?: (ctx: IntLiteralContext) => void;

  /**
   * Enter a parse tree produced by the `floatLiteral`
   * labeled alternative in `PLCParser.literal`.
   * @param ctx the parse tree
   */
  enterFloatLiteral?: (ctx: FloatLiteralContext) => void;
  /**
   * Exit a parse tree produced by the `floatLiteral`
   * labeled alternative in `PLCParser.literal`.
   * @param ctx the parse tree
   */
  exitFloatLiteral?: (ctx: FloatLiteralContext) => void;

  /**
   * Enter a parse tree produced by the `boolLiteral`
   * labeled alternative in `PLCParser.literal`.
   * @param ctx the parse tree
   */
  enterBoolLiteral?: (ctx: BoolLiteralContext) => void;
  /**
   * Exit a parse tree produced by the `boolLiteral`
   * labeled alternative in `PLCParser.literal`.
   * @param ctx the parse tree
   */
  exitBoolLiteral?: (ctx: BoolLiteralContext) => void;

  /**
   * Enter a parse tree produced by the `stringLiteral`
   * labeled alternative in `PLCParser.literal`.
   * @param ctx the parse tree
   */
  enterStringLiteral?: (ctx: StringLiteralContext) => void;
  /**
   * Exit a parse tree produced by the `stringLiteral`
   * labeled alternative in `PLCParser.literal`.
   * @param ctx the parse tree
   */
  exitStringLiteral?: (ctx: StringLiteralContext) => void;

  /**
   * Enter a parse tree produced by `PLCParser.program`.
   * @param ctx the parse tree
   */
  enterProgram?: (ctx: ProgramContext) => void;
  /**
   * Exit a parse tree produced by `PLCParser.program`.
   * @param ctx the parse tree
   */
  exitProgram?: (ctx: ProgramContext) => void;

  /**
   * Enter a parse tree produced by `PLCParser.statement`.
   * @param ctx the parse tree
   */
  enterStatement?: (ctx: StatementContext) => void;
  /**
   * Exit a parse tree produced by `PLCParser.statement`.
   * @param ctx the parse tree
   */
  exitStatement?: (ctx: StatementContext) => void;

  /**
   * Enter a parse tree produced by `PLCParser.varDeclaration`.
   * @param ctx the parse tree
   */
  enterVarDeclaration?: (ctx: VarDeclarationContext) => void;
  /**
   * Exit a parse tree produced by `PLCParser.varDeclaration`.
   * @param ctx the parse tree
   */
  exitVarDeclaration?: (ctx: VarDeclarationContext) => void;

  /**
   * Enter a parse tree produced by `PLCParser.expressionStmt`.
   * @param ctx the parse tree
   */
  enterExpressionStmt?: (ctx: ExpressionStmtContext) => void;
  /**
   * Exit a parse tree produced by `PLCParser.expressionStmt`.
   * @param ctx the parse tree
   */
  exitExpressionStmt?: (ctx: ExpressionStmtContext) => void;

  /**
   * Enter a parse tree produced by `PLCParser.readStmt`.
   * @param ctx the parse tree
   */
  enterReadStmt?: (ctx: ReadStmtContext) => void;
  /**
   * Exit a parse tree produced by `PLCParser.readStmt`.
   * @param ctx the parse tree
   */
  exitReadStmt?: (ctx: ReadStmtContext) => void;

  /**
   * Enter a parse tree produced by `PLCParser.writeStmt`.
   * @param ctx the parse tree
   */
  enterWriteStmt?: (ctx: WriteStmtContext) => void;
  /**
   * Exit a parse tree produced by `PLCParser.writeStmt`.
   * @param ctx the parse tree
   */
  exitWriteStmt?: (ctx: WriteStmtContext) => void;

  /**
   * Enter a parse tree produced by `PLCParser.block`.
   * @param ctx the parse tree
   */
  enterBlock?: (ctx: BlockContext) => void;
  /**
   * Exit a parse tree produced by `PLCParser.block`.
   * @param ctx the parse tree
   */
  exitBlock?: (ctx: BlockContext) => void;

  /**
   * Enter a parse tree produced by `PLCParser.ifStmt`.
   * @param ctx the parse tree
   */
  enterIfStmt?: (ctx: IfStmtContext) => void;
  /**
   * Exit a parse tree produced by `PLCParser.ifStmt`.
   * @param ctx the parse tree
   */
  exitIfStmt?: (ctx: IfStmtContext) => void;

  /**
   * Enter a parse tree produced by `PLCParser.whileStmt`.
   * @param ctx the parse tree
   */
  enterWhileStmt?: (ctx: WhileStmtContext) => void;
  /**
   * Exit a parse tree produced by `PLCParser.whileStmt`.
   * @param ctx the parse tree
   */
  exitWhileStmt?: (ctx: WhileStmtContext) => void;

  /**
   * Enter a parse tree produced by `PLCParser.expression`.
   * @param ctx the parse tree
   */
  enterExpression?: (ctx: ExpressionContext) => void;
  /**
   * Exit a parse tree produced by `PLCParser.expression`.
   * @param ctx the parse tree
   */
  exitExpression?: (ctx: ExpressionContext) => void;

  /**
   * Enter a parse tree produced by `PLCParser.literal`.
   * @param ctx the parse tree
   */
  enterLiteral?: (ctx: LiteralContext) => void;
  /**
   * Exit a parse tree produced by `PLCParser.literal`.
   * @param ctx the parse tree
   */
  exitLiteral?: (ctx: LiteralContext) => void;
}
