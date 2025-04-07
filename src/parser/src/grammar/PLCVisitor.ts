// Generated from src/grammar/PLC.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { MulDivExprContext } from "./PLCParser";
import { AddSubExprContext } from "./PLCParser";
import { ComparisonExprContext } from "./PLCParser";
import { LogicalExprContext } from "./PLCParser";
import { NotExprContext } from "./PLCParser";
import { ParenExprContext } from "./PLCParser";
import { BooleanLiteralContext } from "./PLCParser";
import { IntLiteralContext } from "./PLCParser";
import { IdentifierExprContext } from "./PLCParser";
import { ProgramContext } from "./PLCParser";
import { StatementContext } from "./PLCParser";
import { VariableDeclarationContext } from "./PLCParser";
import { AssignmentContext } from "./PLCParser";
import { IfStatementContext } from "./PLCParser";
import { WhileStatementContext } from "./PLCParser";
import { BlockContext } from "./PLCParser";
import { ExpressionContext } from "./PLCParser";
import { TypeContext } from "./PLCParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PLCParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface PLCVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `MulDivExpr`
	 * labeled alternative in `PLCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulDivExpr?: (ctx: MulDivExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `AddSubExpr`
	 * labeled alternative in `PLCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddSubExpr?: (ctx: AddSubExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ComparisonExpr`
	 * labeled alternative in `PLCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonExpr?: (ctx: ComparisonExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `LogicalExpr`
	 * labeled alternative in `PLCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalExpr?: (ctx: LogicalExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `NotExpr`
	 * labeled alternative in `PLCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotExpr?: (ctx: NotExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ParenExpr`
	 * labeled alternative in `PLCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenExpr?: (ctx: ParenExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `BooleanLiteral`
	 * labeled alternative in `PLCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `IntLiteral`
	 * labeled alternative in `PLCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntLiteral?: (ctx: IntLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `IdentifierExpr`
	 * labeled alternative in `PLCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpr?: (ctx: IdentifierExprContext) => Result;

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
	 * Visit a parse tree produced by `PLCParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PLCParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `PLCParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PLCParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PLCParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `PLCParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PLCParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;
}

