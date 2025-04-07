// Generated from src/grammar/PLC.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { AssignmentContext } from "./PLCParser";
import { ConcatContext } from "./PLCParser";
import { MulDivModContext } from "./PLCParser";
import { AddSubContext } from "./PLCParser";
import { RelOpContext } from "./PLCParser";
import { EqNeqContext } from "./PLCParser";
import { AndContext } from "./PLCParser";
import { OrContext } from "./PLCParser";
import { NotContext } from "./PLCParser";
import { UnaryMinusContext } from "./PLCParser";
import { ParensContext } from "./PLCParser";
import { LiteralExprContext } from "./PLCParser";
import { VarExprContext } from "./PLCParser";
import { IntLiteralContext } from "./PLCParser";
import { FloatLiteralContext } from "./PLCParser";
import { BoolLiteralContext } from "./PLCParser";
import { StringLiteralContext } from "./PLCParser";
import { ProgramContext } from "./PLCParser";
import { StatementContext } from "./PLCParser";
import { VarDeclarationContext } from "./PLCParser";
import { ExpressionStmtContext } from "./PLCParser";
import { ReadStmtContext } from "./PLCParser";
import { WriteStmtContext } from "./PLCParser";
import { BlockContext } from "./PLCParser";
import { IfStmtContext } from "./PLCParser";
import { WhileStmtContext } from "./PLCParser";
import { ExpressionContext } from "./PLCParser";
import { LiteralContext } from "./PLCParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PLCParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface PLCVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `assignment`
	 * labeled alternative in `PLCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `concat`
	 * labeled alternative in `PLCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConcat?: (ctx: ConcatContext) => Result;

	/**
	 * Visit a parse tree produced by the `mulDivMod`
	 * labeled alternative in `PLCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulDivMod?: (ctx: MulDivModContext) => Result;

	/**
	 * Visit a parse tree produced by the `addSub`
	 * labeled alternative in `PLCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddSub?: (ctx: AddSubContext) => Result;

	/**
	 * Visit a parse tree produced by the `relOp`
	 * labeled alternative in `PLCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelOp?: (ctx: RelOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `eqNeq`
	 * labeled alternative in `PLCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqNeq?: (ctx: EqNeqContext) => Result;

	/**
	 * Visit a parse tree produced by the `and`
	 * labeled alternative in `PLCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd?: (ctx: AndContext) => Result;

	/**
	 * Visit a parse tree produced by the `or`
	 * labeled alternative in `PLCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOr?: (ctx: OrContext) => Result;

	/**
	 * Visit a parse tree produced by the `not`
	 * labeled alternative in `PLCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNot?: (ctx: NotContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryMinus`
	 * labeled alternative in `PLCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryMinus?: (ctx: UnaryMinusContext) => Result;

	/**
	 * Visit a parse tree produced by the `parens`
	 * labeled alternative in `PLCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParens?: (ctx: ParensContext) => Result;

	/**
	 * Visit a parse tree produced by the `literalExpr`
	 * labeled alternative in `PLCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpr?: (ctx: LiteralExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `varExpr`
	 * labeled alternative in `PLCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarExpr?: (ctx: VarExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `intLiteral`
	 * labeled alternative in `PLCParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntLiteral?: (ctx: IntLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `floatLiteral`
	 * labeled alternative in `PLCParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatLiteral?: (ctx: FloatLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `boolLiteral`
	 * labeled alternative in `PLCParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolLiteral?: (ctx: BoolLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `PLCParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `PLCParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `PLCParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PLCParser.varDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDeclaration?: (ctx: VarDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PLCParser.expressionStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStmt?: (ctx: ExpressionStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `PLCParser.readStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReadStmt?: (ctx: ReadStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `PLCParser.writeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWriteStmt?: (ctx: WriteStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `PLCParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `PLCParser.ifStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStmt?: (ctx: IfStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `PLCParser.whileStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStmt?: (ctx: WhileStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `PLCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PLCParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;
}

