// Generated from src/grammar/PLC.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { PLCListener } from "./PLCListener";
import { PLCVisitor } from "./PLCVisitor";


export class PLCParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly ID = 20;
	public static readonly INT = 21;
	public static readonly FLOAT = 22;
	public static readonly BOOL = 23;
	public static readonly WS = 24;
	public static readonly NEWLINE = 25;
	public static readonly COMMENT = 26;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_assignment = 2;
	public static readonly RULE_declaration = 3;
	public static readonly RULE_functionCall = 4;
	public static readonly RULE_ifStatement = 5;
	public static readonly RULE_whileStatement = 6;
	public static readonly RULE_expression = 7;
	public static readonly RULE_type = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "assignment", "declaration", "functionCall", "ifStatement", 
		"whileStatement", "expression", "type",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='", "'let'", "':'", "'('", "','", "')'", "'if'", "'then'", 
		"'else'", "'end'", "'while'", "'do'", "'*'", "'/'", "'+'", "'-'", "'int'", 
		"'float'", "'bool'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "ID", 
		"INT", "FLOAT", "BOOL", "WS", "NEWLINE", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(PLCParser._LITERAL_NAMES, PLCParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return PLCParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "PLC.g4"; }

	// @Override
	public get ruleNames(): string[] { return PLCParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return PLCParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(PLCParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, PLCParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PLCParser.T__1) | (1 << PLCParser.T__6) | (1 << PLCParser.T__10) | (1 << PLCParser.ID))) !== 0)) {
				{
				{
				this.state = 18;
				this.statement();
				this.state = 19;
				this.match(PLCParser.NEWLINE);
				}
				}
				this.state = 25;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 26;
			this.match(PLCParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, PLCParser.RULE_statement);
		try {
			this.state = 33;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 28;
				this.assignment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 29;
				this.declaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 30;
				this.functionCall();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 31;
				this.ifStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 32;
				this.whileStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, PLCParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 35;
			this.match(PLCParser.ID);
			this.state = 36;
			this.match(PLCParser.T__0);
			this.state = 37;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, PLCParser.RULE_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this.match(PLCParser.T__1);
			this.state = 40;
			this.match(PLCParser.ID);
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PLCParser.T__2) {
				{
				this.state = 41;
				this.match(PLCParser.T__2);
				this.state = 42;
				this.type();
				}
			}

			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PLCParser.T__0) {
				{
				this.state = 45;
				this.match(PLCParser.T__0);
				this.state = 46;
				this.expression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, PLCParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this.match(PLCParser.ID);
			this.state = 50;
			this.match(PLCParser.T__3);
			this.state = 59;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PLCParser.T__3) | (1 << PLCParser.ID) | (1 << PLCParser.INT) | (1 << PLCParser.FLOAT) | (1 << PLCParser.BOOL))) !== 0)) {
				{
				this.state = 51;
				this.expression(0);
				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === PLCParser.T__4) {
					{
					{
					this.state = 52;
					this.match(PLCParser.T__4);
					this.state = 53;
					this.expression(0);
					}
					}
					this.state = 58;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 61;
			this.match(PLCParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, PLCParser.RULE_ifStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			this.match(PLCParser.T__6);
			this.state = 64;
			this.expression(0);
			this.state = 65;
			this.match(PLCParser.T__7);
			this.state = 66;
			this.match(PLCParser.NEWLINE);
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PLCParser.T__1) | (1 << PLCParser.T__6) | (1 << PLCParser.T__10) | (1 << PLCParser.ID))) !== 0)) {
				{
				{
				this.state = 67;
				this.statement();
				this.state = 68;
				this.match(PLCParser.NEWLINE);
				}
				}
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PLCParser.T__8) {
				{
				this.state = 75;
				this.match(PLCParser.T__8);
				this.state = 76;
				this.match(PLCParser.NEWLINE);
				this.state = 82;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PLCParser.T__1) | (1 << PLCParser.T__6) | (1 << PLCParser.T__10) | (1 << PLCParser.ID))) !== 0)) {
					{
					{
					this.state = 77;
					this.statement();
					this.state = 78;
					this.match(PLCParser.NEWLINE);
					}
					}
					this.state = 84;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 87;
			this.match(PLCParser.T__9);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, PLCParser.RULE_whileStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 89;
			this.match(PLCParser.T__10);
			this.state = 90;
			this.expression(0);
			this.state = 91;
			this.match(PLCParser.T__11);
			this.state = 92;
			this.match(PLCParser.NEWLINE);
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PLCParser.T__1) | (1 << PLCParser.T__6) | (1 << PLCParser.T__10) | (1 << PLCParser.ID))) !== 0)) {
				{
				{
				this.state = 93;
				this.statement();
				this.state = 94;
				this.match(PLCParser.NEWLINE);
				}
				}
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 101;
			this.match(PLCParser.T__9);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 14;
		this.enterRecursionRule(_localctx, 14, PLCParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PLCParser.T__3:
				{
				this.state = 104;
				this.match(PLCParser.T__3);
				this.state = 105;
				this.expression(0);
				this.state = 106;
				this.match(PLCParser.T__5);
				}
				break;
			case PLCParser.INT:
				{
				this.state = 108;
				this.match(PLCParser.INT);
				}
				break;
			case PLCParser.FLOAT:
				{
				this.state = 109;
				this.match(PLCParser.FLOAT);
				}
				break;
			case PLCParser.BOOL:
				{
				this.state = 110;
				this.match(PLCParser.BOOL);
				}
				break;
			case PLCParser.ID:
				{
				this.state = 111;
				this.match(PLCParser.ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 122;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 120;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PLCParser.RULE_expression);
						this.state = 114;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 115;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === PLCParser.T__12 || _la === PLCParser.T__13)) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 116;
						this.expression(8);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, PLCParser.RULE_expression);
						this.state = 117;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 118;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === PLCParser.T__14 || _la === PLCParser.T__15)) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 119;
						this.expression(7);
						}
						break;
					}
					}
				}
				this.state = 124;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, PLCParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PLCParser.T__16) | (1 << PLCParser.T__17) | (1 << PLCParser.T__18))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 7:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 7);

		case 1:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1C\x82\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x02\x07\x02\x18" +
		"\n\x02\f\x02\x0E\x02\x1B\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x03$\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x05\x05.\n\x05\x03\x05\x03\x05\x05\x052\n\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x069\n\x06\f\x06\x0E\x06" +
		"<\v\x06\x05\x06>\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x07\x07I\n\x07\f\x07\x0E\x07L\v\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x07\x07S\n\x07\f\x07\x0E\x07V\v\x07\x05\x07" +
		"X\n\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07" +
		"\bc\n\b\f\b\x0E\bf\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x05\ts\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07" +
		"\t{\n\t\f\t\x0E\t~\v\t\x03\n\x03\n\x03\n\x02\x02\x03\x10\v\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\x05\x03\x02" +
		"\x0F\x10\x03\x02\x11\x12\x03\x02\x13\x15\x02\x8B\x02\x19\x03\x02\x02\x02" +
		"\x04#\x03\x02\x02\x02\x06%\x03\x02\x02\x02\b)\x03\x02\x02\x02\n3\x03\x02" +
		"\x02\x02\fA\x03\x02\x02\x02\x0E[\x03\x02\x02\x02\x10r\x03\x02\x02\x02" +
		"\x12\x7F\x03\x02\x02\x02\x14\x15\x05\x04\x03\x02\x15\x16\x07\x1B\x02\x02" +
		"\x16\x18\x03\x02\x02\x02\x17\x14\x03\x02\x02\x02\x18\x1B\x03\x02\x02\x02" +
		"\x19\x17\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x1C\x03\x02\x02\x02" +
		"\x1B\x19\x03\x02\x02\x02\x1C\x1D\x07\x02\x02\x03\x1D\x03\x03\x02\x02\x02" +
		"\x1E$\x05\x06\x04\x02\x1F$\x05\b\x05\x02 $\x05\n\x06\x02!$\x05\f\x07\x02" +
		"\"$\x05\x0E\b\x02#\x1E\x03\x02\x02\x02#\x1F\x03\x02\x02\x02# \x03\x02" +
		"\x02\x02#!\x03\x02\x02\x02#\"\x03\x02\x02\x02$\x05\x03\x02\x02\x02%&\x07" +
		"\x16\x02\x02&\'\x07\x03\x02\x02\'(\x05\x10\t\x02(\x07\x03\x02\x02\x02" +
		")*\x07\x04\x02\x02*-\x07\x16\x02\x02+,\x07\x05\x02\x02,.\x05\x12\n\x02" +
		"-+\x03\x02\x02\x02-.\x03\x02\x02\x02.1\x03\x02\x02\x02/0\x07\x03\x02\x02" +
		"02\x05\x10\t\x021/\x03\x02\x02\x0212\x03\x02\x02\x022\t\x03\x02\x02\x02" +
		"34\x07\x16\x02\x024=\x07\x06\x02\x025:\x05\x10\t\x0267\x07\x07\x02\x02" +
		"79\x05\x10\t\x0286\x03\x02\x02\x029<\x03\x02\x02\x02:8\x03\x02\x02\x02" +
		":;\x03\x02\x02\x02;>\x03\x02\x02\x02<:\x03\x02\x02\x02=5\x03\x02\x02\x02" +
		"=>\x03\x02\x02\x02>?\x03\x02\x02\x02?@\x07\b\x02\x02@\v\x03\x02\x02\x02" +
		"AB\x07\t\x02\x02BC\x05\x10\t\x02CD\x07\n\x02\x02DJ\x07\x1B\x02\x02EF\x05" +
		"\x04\x03\x02FG\x07\x1B\x02\x02GI\x03\x02\x02\x02HE\x03\x02\x02\x02IL\x03" +
		"\x02\x02\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02KW\x03\x02\x02\x02LJ\x03" +
		"\x02\x02\x02MN\x07\v\x02\x02NT\x07\x1B\x02\x02OP\x05\x04\x03\x02PQ\x07" +
		"\x1B\x02\x02QS\x03\x02\x02\x02RO\x03\x02\x02\x02SV\x03\x02\x02\x02TR\x03" +
		"\x02\x02\x02TU\x03\x02\x02\x02UX\x03\x02\x02\x02VT\x03\x02\x02\x02WM\x03" +
		"\x02\x02\x02WX\x03\x02\x02\x02XY\x03\x02\x02\x02YZ\x07\f\x02\x02Z\r\x03" +
		"\x02\x02\x02[\\\x07\r\x02\x02\\]\x05\x10\t\x02]^\x07\x0E\x02\x02^d\x07" +
		"\x1B\x02\x02_`\x05\x04\x03\x02`a\x07\x1B\x02\x02ac\x03\x02\x02\x02b_\x03" +
		"\x02\x02\x02cf\x03\x02\x02\x02db\x03\x02\x02\x02de\x03\x02\x02\x02eg\x03" +
		"\x02\x02\x02fd\x03\x02\x02\x02gh\x07\f\x02\x02h\x0F\x03\x02\x02\x02ij" +
		"\b\t\x01\x02jk\x07\x06\x02\x02kl\x05\x10\t\x02lm\x07\b\x02\x02ms\x03\x02" +
		"\x02\x02ns\x07\x17\x02\x02os\x07\x18\x02\x02ps\x07\x19\x02\x02qs\x07\x16" +
		"\x02\x02ri\x03\x02\x02\x02rn\x03\x02\x02\x02ro\x03\x02\x02\x02rp\x03\x02" +
		"\x02\x02rq\x03\x02\x02\x02s|\x03\x02\x02\x02tu\f\t\x02\x02uv\t\x02\x02" +
		"\x02v{\x05\x10\t\nwx\f\b\x02\x02xy\t\x03\x02\x02y{\x05\x10\t\tzt\x03\x02" +
		"\x02\x02zw\x03\x02\x02\x02{~\x03\x02\x02\x02|z\x03\x02\x02\x02|}\x03\x02" +
		"\x02\x02}\x11\x03\x02\x02\x02~|\x03\x02\x02\x02\x7F\x80\t\x04\x02\x02" +
		"\x80\x13\x03\x02\x02\x02\x0F\x19#-1:=JTWdrz|";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PLCParser.__ATN) {
			PLCParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(PLCParser._serializedATN));
		}

		return PLCParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(PLCParser.EOF, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PLCParser.NEWLINE);
		} else {
			return this.getToken(PLCParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PLCParser.RULE_program; }
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PLCParser.RULE_statement; }
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(PLCParser.ID, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PLCParser.RULE_assignment; }
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(PLCParser.ID, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PLCParser.RULE_declaration; }
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(PLCParser.ID, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PLCParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PLCParser.NEWLINE);
		} else {
			return this.getToken(PLCParser.NEWLINE, i);
		}
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PLCParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PLCParser.NEWLINE);
		} else {
			return this.getToken(PLCParser.NEWLINE, i);
		}
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PLCParser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public INT(): TerminalNode | undefined { return this.tryGetToken(PLCParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(PLCParser.FLOAT, 0); }
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(PLCParser.BOOL, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(PLCParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PLCParser.RULE_expression; }
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PLCParser.RULE_type; }
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


