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
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly INT = 29;
	public static readonly FLOAT = 30;
	public static readonly STRING = 31;
	public static readonly BOOL = 32;
	public static readonly TYPE = 33;
	public static readonly ID = 34;
	public static readonly COMMENT = 35;
	public static readonly WS = 36;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_varDeclaration = 2;
	public static readonly RULE_expressionStmt = 3;
	public static readonly RULE_readStmt = 4;
	public static readonly RULE_writeStmt = 5;
	public static readonly RULE_fileStmt = 6;
	public static readonly RULE_fileOpen = 7;
	public static readonly RULE_fileWrite = 8;
	public static readonly RULE_filePrint = 9;
	public static readonly RULE_block = 10;
	public static readonly RULE_ifStmt = 11;
	public static readonly RULE_whileStmt = 12;
	public static readonly RULE_expression = 13;
	public static readonly RULE_literal = 14;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "varDeclaration", "expressionStmt", "readStmt", 
		"writeStmt", "fileStmt", "fileOpen", "fileWrite", "filePrint", "block", 
		"ifStmt", "whileStmt", "expression", "literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "','", "'read'", "'write'", "'fopen'", "'fwrite'", "'fprint'", 
		"'{'", "'}'", "'if'", "'('", "')'", "'else'", "'while'", "'='", "'.'", 
		"'*'", "'/'", "'%'", "'+'", "'-'", "'<'", "'>'", "'=='", "'!='", "'&&'", 
		"'||'", "'!'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "INT", "FLOAT", "STRING", "BOOL", "TYPE", "ID", "COMMENT", 
		"WS",
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
			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (PLCParser.T__2 - 3)) | (1 << (PLCParser.T__3 - 3)) | (1 << (PLCParser.T__4 - 3)) | (1 << (PLCParser.T__5 - 3)) | (1 << (PLCParser.T__6 - 3)) | (1 << (PLCParser.T__7 - 3)) | (1 << (PLCParser.T__9 - 3)) | (1 << (PLCParser.T__10 - 3)) | (1 << (PLCParser.T__13 - 3)) | (1 << (PLCParser.T__20 - 3)) | (1 << (PLCParser.T__27 - 3)) | (1 << (PLCParser.INT - 3)) | (1 << (PLCParser.FLOAT - 3)) | (1 << (PLCParser.STRING - 3)) | (1 << (PLCParser.BOOL - 3)) | (1 << (PLCParser.TYPE - 3)) | (1 << (PLCParser.ID - 3)))) !== 0)) {
				{
				{
				this.state = 30;
				this.statement();
				}
				}
				this.state = 35;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 36;
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PLCParser.TYPE:
				{
				this.state = 38;
				this.varDeclaration();
				}
				break;
			case PLCParser.T__10:
			case PLCParser.T__20:
			case PLCParser.T__27:
			case PLCParser.INT:
			case PLCParser.FLOAT:
			case PLCParser.STRING:
			case PLCParser.BOOL:
			case PLCParser.ID:
				{
				this.state = 39;
				this.expressionStmt();
				}
				break;
			case PLCParser.T__2:
				{
				this.state = 40;
				this.readStmt();
				}
				break;
			case PLCParser.T__3:
				{
				this.state = 41;
				this.writeStmt();
				}
				break;
			case PLCParser.T__4:
			case PLCParser.T__5:
			case PLCParser.T__6:
				{
				this.state = 42;
				this.fileStmt();
				}
				break;
			case PLCParser.T__7:
				{
				this.state = 43;
				this.block();
				}
				break;
			case PLCParser.T__9:
				{
				this.state = 44;
				this.ifStmt();
				}
				break;
			case PLCParser.T__13:
				{
				this.state = 45;
				this.whileStmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 49;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 48;
				this.match(PLCParser.T__0);
				}
				break;
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
	public varDeclaration(): VarDeclarationContext {
		let _localctx: VarDeclarationContext = new VarDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, PLCParser.RULE_varDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			this.match(PLCParser.TYPE);
			this.state = 52;
			this.match(PLCParser.ID);
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PLCParser.T__1) {
				{
				{
				this.state = 53;
				this.match(PLCParser.T__1);
				this.state = 54;
				this.match(PLCParser.ID);
				}
				}
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 61;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 60;
				this.match(PLCParser.T__0);
				}
				break;
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
	public expressionStmt(): ExpressionStmtContext {
		let _localctx: ExpressionStmtContext = new ExpressionStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, PLCParser.RULE_expressionStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			this.expression(0);
			this.state = 65;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 64;
				this.match(PLCParser.T__0);
				}
				break;
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
	public readStmt(): ReadStmtContext {
		let _localctx: ReadStmtContext = new ReadStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, PLCParser.RULE_readStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.match(PLCParser.T__2);
			this.state = 68;
			this.match(PLCParser.ID);
			this.state = 73;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PLCParser.T__1) {
				{
				{
				this.state = 69;
				this.match(PLCParser.T__1);
				this.state = 70;
				this.match(PLCParser.ID);
				}
				}
				this.state = 75;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 77;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 76;
				this.match(PLCParser.T__0);
				}
				break;
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
	public writeStmt(): WriteStmtContext {
		let _localctx: WriteStmtContext = new WriteStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, PLCParser.RULE_writeStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.match(PLCParser.T__3);
			this.state = 88;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 80;
				this.expression(0);
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === PLCParser.T__1) {
					{
					{
					this.state = 81;
					this.match(PLCParser.T__1);
					this.state = 82;
					this.expression(0);
					}
					}
					this.state = 87;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 91;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 90;
				this.match(PLCParser.T__0);
				}
				break;
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
	public fileStmt(): FileStmtContext {
		let _localctx: FileStmtContext = new FileStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, PLCParser.RULE_fileStmt);
		try {
			this.state = 96;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PLCParser.T__4:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 93;
				this.fileOpen();
				}
				break;
			case PLCParser.T__5:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 94;
				this.fileWrite();
				}
				break;
			case PLCParser.T__6:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 95;
				this.filePrint();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public fileOpen(): FileOpenContext {
		let _localctx: FileOpenContext = new FileOpenContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, PLCParser.RULE_fileOpen);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.match(PLCParser.T__4);
			this.state = 99;
			this.expression(0);
			this.state = 101;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 100;
				this.match(PLCParser.T__0);
				}
				break;
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
	public fileWrite(): FileWriteContext {
		let _localctx: FileWriteContext = new FileWriteContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, PLCParser.RULE_fileWrite);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 103;
			this.match(PLCParser.T__5);
			this.state = 104;
			this.expression(0);
			this.state = 105;
			this.match(PLCParser.T__1);
			this.state = 106;
			this.expression(0);
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PLCParser.T__1) {
				{
				{
				this.state = 107;
				this.match(PLCParser.T__1);
				this.state = 108;
				this.expression(0);
				}
				}
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 115;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 114;
				this.match(PLCParser.T__0);
				}
				break;
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
	public filePrint(): FilePrintContext {
		let _localctx: FilePrintContext = new FilePrintContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, PLCParser.RULE_filePrint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this.match(PLCParser.T__6);
			this.state = 118;
			this.expression(0);
			this.state = 119;
			this.match(PLCParser.T__1);
			this.state = 120;
			this.expression(0);
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PLCParser.T__1) {
				{
				{
				this.state = 121;
				this.match(PLCParser.T__1);
				this.state = 122;
				this.expression(0);
				}
				}
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 129;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 128;
				this.match(PLCParser.T__0);
				}
				break;
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, PLCParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 131;
			this.match(PLCParser.T__7);
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (PLCParser.T__2 - 3)) | (1 << (PLCParser.T__3 - 3)) | (1 << (PLCParser.T__4 - 3)) | (1 << (PLCParser.T__5 - 3)) | (1 << (PLCParser.T__6 - 3)) | (1 << (PLCParser.T__7 - 3)) | (1 << (PLCParser.T__9 - 3)) | (1 << (PLCParser.T__10 - 3)) | (1 << (PLCParser.T__13 - 3)) | (1 << (PLCParser.T__20 - 3)) | (1 << (PLCParser.T__27 - 3)) | (1 << (PLCParser.INT - 3)) | (1 << (PLCParser.FLOAT - 3)) | (1 << (PLCParser.STRING - 3)) | (1 << (PLCParser.BOOL - 3)) | (1 << (PLCParser.TYPE - 3)) | (1 << (PLCParser.ID - 3)))) !== 0)) {
				{
				{
				this.state = 132;
				this.statement();
				}
				}
				this.state = 137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 138;
			this.match(PLCParser.T__8);
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
	public ifStmt(): IfStmtContext {
		let _localctx: IfStmtContext = new IfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, PLCParser.RULE_ifStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(PLCParser.T__9);
			this.state = 141;
			this.match(PLCParser.T__10);
			this.state = 142;
			this.expression(0);
			this.state = 143;
			this.match(PLCParser.T__11);
			this.state = 144;
			this.statement();
			this.state = 147;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 145;
				this.match(PLCParser.T__12);
				this.state = 146;
				this.statement();
				}
				break;
			}
			this.state = 150;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 149;
				this.match(PLCParser.T__0);
				}
				break;
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
	public whileStmt(): WhileStmtContext {
		let _localctx: WhileStmtContext = new WhileStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, PLCParser.RULE_whileStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			this.match(PLCParser.T__13);
			this.state = 153;
			this.match(PLCParser.T__10);
			this.state = 154;
			this.expression(0);
			this.state = 155;
			this.match(PLCParser.T__11);
			this.state = 156;
			this.statement();
			this.state = 158;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 157;
				this.match(PLCParser.T__0);
				}
				break;
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
		let _startState: number = 26;
		this.enterRecursionRule(_localctx, 26, PLCParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				_localctx = new AssignmentContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 161;
				this.match(PLCParser.ID);
				this.state = 162;
				this.match(PLCParser.T__14);
				this.state = 163;
				this.expression(14);
				}
				break;

			case 2:
				{
				_localctx = new NotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 164;
				this.match(PLCParser.T__27);
				this.state = 165;
				this.expression(6);
				}
				break;

			case 3:
				{
				_localctx = new UnaryMinusContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 166;
				this.match(PLCParser.T__20);
				this.state = 167;
				this.expression(5);
				}
				break;

			case 4:
				{
				_localctx = new ParensContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 168;
				this.match(PLCParser.T__10);
				this.state = 169;
				this.expression(0);
				this.state = 170;
				this.match(PLCParser.T__11);
				}
				break;

			case 5:
				{
				_localctx = new LiteralExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 172;
				this.literal();
				}
				break;

			case 6:
				{
				_localctx = new VarExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 173;
				this.match(PLCParser.ID);
				}
				break;

			case 7:
				{
				_localctx = new MultiAssignmentContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 174;
				this.match(PLCParser.ID);
				this.state = 175;
				this.match(PLCParser.T__14);
				this.state = 176;
				this.expression(0);
				this.state = 183;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 177;
						this.match(PLCParser.T__1);
						this.state = 178;
						this.match(PLCParser.ID);
						this.state = 179;
						this.match(PLCParser.T__14);
						this.state = 180;
						this.expression(0);
						}
						}
					}
					this.state = 185;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 211;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 209;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
					case 1:
						{
						_localctx = new ConcatContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PLCParser.RULE_expression);
						this.state = 188;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 189;
						this.match(PLCParser.T__15);
						this.state = 190;
						this.expression(14);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PLCParser.RULE_expression);
						this.state = 191;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 192;
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
						this.state = 193;
						this.expression(13);
						}
						break;

					case 3:
						{
						_localctx = new AddSubContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PLCParser.RULE_expression);
						this.state = 194;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 195;
						_la = this._input.LA(1);
						if (!(_la === PLCParser.T__19 || _la === PLCParser.T__20)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 196;
						this.expression(12);
						}
						break;

					case 4:
						{
						_localctx = new RelOpContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PLCParser.RULE_expression);
						this.state = 197;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 198;
						_la = this._input.LA(1);
						if (!(_la === PLCParser.T__21 || _la === PLCParser.T__22)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 199;
						this.expression(11);
						}
						break;

					case 5:
						{
						_localctx = new EqNeqContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PLCParser.RULE_expression);
						this.state = 200;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 201;
						_la = this._input.LA(1);
						if (!(_la === PLCParser.T__23 || _la === PLCParser.T__24)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 202;
						this.expression(10);
						}
						break;

					case 6:
						{
						_localctx = new AndContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PLCParser.RULE_expression);
						this.state = 203;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 204;
						this.match(PLCParser.T__25);
						this.state = 205;
						this.expression(9);
						}
						break;

					case 7:
						{
						_localctx = new OrContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, PLCParser.RULE_expression);
						this.state = 206;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 207;
						this.match(PLCParser.T__26);
						this.state = 208;
						this.expression(8);
						}
						break;
					}
					}
				}
				this.state = 213;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, PLCParser.RULE_literal);
		try {
			this.state = 218;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PLCParser.INT:
				_localctx = new IntLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 214;
				this.match(PLCParser.INT);
				}
				break;
			case PLCParser.FLOAT:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 215;
				this.match(PLCParser.FLOAT);
				}
				break;
			case PLCParser.BOOL:
				_localctx = new BoolLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 216;
				this.match(PLCParser.BOOL);
				}
				break;
			case PLCParser.STRING:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 217;
				this.match(PLCParser.STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
		case 13:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 13);

		case 1:
			return this.precpred(this._ctx, 12);

		case 2:
			return this.precpred(this._ctx, 11);

		case 3:
			return this.precpred(this._ctx, 10);

		case 4:
			return this.precpred(this._ctx, 9);

		case 5:
			return this.precpred(this._ctx, 8);

		case 6:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03&\xDF\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x07\x02\"\n\x02\f\x02\x0E" +
		"\x02%\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x05\x031\n\x03\x03\x03\x05\x034\n\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x07\x04:\n\x04\f\x04\x0E\x04=\v\x04\x03\x04\x05\x04" +
		"@\n\x04\x03\x05\x03\x05\x05\x05D\n\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x07\x06J\n\x06\f\x06\x0E\x06M\v\x06\x03\x06\x05\x06P\n\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x07\x07V\n\x07\f\x07\x0E\x07Y\v\x07\x05\x07[\n\x07" +
		"\x03\x07\x05\x07^\n\x07\x03\b\x03\b\x03\b\x05\bc\n\b\x03\t\x03\t\x03\t" +
		"\x05\th\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\np\n\n\f\n\x0E\ns" +
		"\v\n\x03\n\x05\nv\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v~\n\v\f" +
		"\v\x0E\v\x81\v\v\x03\v\x05\v\x84\n\v\x03\f\x03\f\x07\f\x88\n\f\f\f\x0E" +
		"\f\x8B\v\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r" +
		"\x96\n\r\x03\r\x05\r\x99\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x05\x0E\xA1\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xB8\n\x0F\f\x0F" +
		"\x0E\x0F\xBB\v\x0F\x05\x0F\xBD\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xD4" +
		"\n\x0F\f\x0F\x0E\x0F\xD7\v\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10" +
		"\xDD\n\x10\x03\x10\x02\x02\x03\x1C\x11\x02\x02\x04\x02\x06\x02\b\x02\n" +
		"\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02\x02\x06\x03\x02\x13\x15\x03\x02\x16\x17\x03\x02\x18\x19\x03" +
		"\x02\x1A\x1B\x02\xFC\x02#\x03\x02\x02\x02\x040\x03\x02\x02\x02\x065\x03" +
		"\x02\x02\x02\bA\x03\x02\x02\x02\nE\x03\x02\x02\x02\fQ\x03\x02\x02\x02" +
		"\x0Eb\x03\x02\x02\x02\x10d\x03\x02\x02\x02\x12i\x03\x02\x02\x02\x14w\x03" +
		"\x02\x02\x02\x16\x85\x03\x02\x02\x02\x18\x8E\x03\x02\x02\x02\x1A\x9A\x03" +
		"\x02\x02\x02\x1C\xBC\x03\x02\x02\x02\x1E\xDC\x03\x02\x02\x02 \"\x05\x04" +
		"\x03\x02! \x03\x02\x02\x02\"%\x03\x02\x02\x02#!\x03\x02\x02\x02#$\x03" +
		"\x02\x02\x02$&\x03\x02\x02\x02%#\x03\x02\x02\x02&\'\x07\x02\x02\x03\'" +
		"\x03\x03\x02\x02\x02(1\x05\x06\x04\x02)1\x05\b\x05\x02*1\x05\n\x06\x02" +
		"+1\x05\f\x07\x02,1\x05\x0E\b\x02-1\x05\x16\f\x02.1\x05\x18\r\x02/1\x05" +
		"\x1A\x0E\x020(\x03\x02\x02\x020)\x03\x02\x02\x020*\x03\x02\x02\x020+\x03" +
		"\x02\x02\x020,\x03\x02\x02\x020-\x03\x02\x02\x020.\x03\x02\x02\x020/\x03" +
		"\x02\x02\x0213\x03\x02\x02\x0224\x07\x03\x02\x0232\x03\x02\x02\x0234\x03" +
		"\x02\x02\x024\x05\x03\x02\x02\x0256\x07#\x02\x026;\x07$\x02\x0278\x07" +
		"\x04\x02\x028:\x07$\x02\x0297\x03\x02\x02\x02:=\x03\x02\x02\x02;9\x03" +
		"\x02\x02\x02;<\x03\x02\x02\x02<?\x03\x02\x02\x02=;\x03\x02\x02\x02>@\x07" +
		"\x03\x02\x02?>\x03\x02\x02\x02?@\x03\x02\x02\x02@\x07\x03\x02\x02\x02" +
		"AC\x05\x1C\x0F\x02BD\x07\x03\x02\x02CB\x03\x02\x02\x02CD\x03\x02\x02\x02" +
		"D\t\x03\x02\x02\x02EF\x07\x05\x02\x02FK\x07$\x02\x02GH\x07\x04\x02\x02" +
		"HJ\x07$\x02\x02IG\x03\x02\x02\x02JM\x03\x02\x02\x02KI\x03\x02\x02\x02" +
		"KL\x03\x02\x02\x02LO\x03\x02\x02\x02MK\x03\x02\x02\x02NP\x07\x03\x02\x02" +
		"ON\x03\x02\x02\x02OP\x03\x02\x02\x02P\v\x03\x02\x02\x02QZ\x07\x06\x02" +
		"\x02RW\x05\x1C\x0F\x02ST\x07\x04\x02\x02TV\x05\x1C\x0F\x02US\x03\x02\x02" +
		"\x02VY\x03\x02\x02\x02WU\x03\x02\x02\x02WX\x03\x02\x02\x02X[\x03\x02\x02" +
		"\x02YW\x03\x02\x02\x02ZR\x03\x02\x02\x02Z[\x03\x02\x02\x02[]\x03\x02\x02" +
		"\x02\\^\x07\x03\x02\x02]\\\x03\x02\x02\x02]^\x03\x02\x02\x02^\r\x03\x02" +
		"\x02\x02_c\x05\x10\t\x02`c\x05\x12\n\x02ac\x05\x14\v\x02b_\x03\x02\x02" +
		"\x02b`\x03\x02\x02\x02ba\x03\x02\x02\x02c\x0F\x03\x02\x02\x02de\x07\x07" +
		"\x02\x02eg\x05\x1C\x0F\x02fh\x07\x03\x02\x02gf\x03\x02\x02\x02gh\x03\x02" +
		"\x02\x02h\x11\x03\x02\x02\x02ij\x07\b\x02\x02jk\x05\x1C\x0F\x02kl\x07" +
		"\x04\x02\x02lq\x05\x1C\x0F\x02mn\x07\x04\x02\x02np\x05\x1C\x0F\x02om\x03" +
		"\x02\x02\x02ps\x03\x02\x02\x02qo\x03\x02\x02\x02qr\x03\x02\x02\x02ru\x03" +
		"\x02\x02\x02sq\x03\x02\x02\x02tv\x07\x03\x02\x02ut\x03\x02\x02\x02uv\x03" +
		"\x02\x02\x02v\x13\x03\x02\x02\x02wx\x07\t\x02\x02xy\x05\x1C\x0F\x02yz" +
		"\x07\x04\x02\x02z\x7F\x05\x1C\x0F\x02{|\x07\x04\x02\x02|~\x05\x1C\x0F" +
		"\x02}{\x03\x02\x02\x02~\x81\x03\x02\x02\x02\x7F}\x03\x02\x02\x02\x7F\x80" +
		"\x03\x02\x02\x02\x80\x83\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x82\x84" +
		"\x07\x03\x02\x02\x83\x82\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x15" +
		"\x03\x02\x02\x02\x85\x89\x07\n\x02\x02\x86\x88\x05\x04\x03\x02\x87\x86" +
		"\x03\x02\x02\x02\x88\x8B\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x89\x8A" +
		"\x03\x02\x02\x02\x8A\x8C\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8C\x8D" +
		"\x07\v\x02\x02\x8D\x17\x03\x02\x02\x02\x8E\x8F\x07\f\x02\x02\x8F\x90\x07" +
		"\r\x02\x02\x90\x91\x05\x1C\x0F\x02\x91\x92\x07\x0E\x02\x02\x92\x95\x05" +
		"\x04\x03\x02\x93\x94\x07\x0F\x02\x02\x94\x96\x05\x04\x03\x02\x95\x93\x03" +
		"\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x98\x03\x02\x02\x02\x97\x99\x07" +
		"\x03\x02\x02\x98\x97\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x19\x03" +
		"\x02\x02\x02\x9A\x9B\x07\x10\x02\x02\x9B\x9C\x07\r\x02\x02\x9C\x9D\x05" +
		"\x1C\x0F\x02\x9D\x9E\x07\x0E\x02\x02\x9E\xA0\x05\x04\x03\x02\x9F\xA1\x07" +
		"\x03\x02\x02\xA0\x9F\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\x1B\x03" +
		"\x02\x02\x02\xA2\xA3\b\x0F\x01\x02\xA3\xA4\x07$\x02\x02\xA4\xA5\x07\x11" +
		"\x02\x02\xA5\xBD\x05\x1C\x0F\x10\xA6\xA7\x07\x1E\x02\x02\xA7\xBD\x05\x1C" +
		"\x0F\b\xA8\xA9\x07\x17\x02\x02\xA9\xBD\x05\x1C\x0F\x07\xAA\xAB\x07\r\x02" +
		"\x02\xAB\xAC\x05\x1C\x0F\x02\xAC\xAD\x07\x0E\x02\x02\xAD\xBD\x03\x02\x02" +
		"\x02\xAE\xBD\x05\x1E\x10\x02\xAF\xBD\x07$\x02\x02\xB0\xB1\x07$\x02\x02" +
		"\xB1\xB2\x07\x11\x02\x02\xB2\xB9\x05\x1C\x0F\x02\xB3\xB4\x07\x04\x02\x02" +
		"\xB4\xB5\x07$\x02\x02\xB5\xB6\x07\x11\x02\x02\xB6\xB8\x05\x1C\x0F\x02" +
		"\xB7\xB3\x03\x02\x02\x02\xB8\xBB\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02" +
		"\xB9\xBA\x03\x02\x02\x02\xBA\xBD\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02" +
		"\xBC\xA2\x03\x02\x02\x02\xBC\xA6\x03\x02\x02\x02\xBC\xA8\x03\x02\x02\x02" +
		"\xBC\xAA\x03\x02\x02\x02\xBC\xAE\x03\x02\x02\x02\xBC\xAF\x03\x02\x02\x02" +
		"\xBC\xB0\x03\x02\x02\x02\xBD\xD5\x03\x02\x02\x02\xBE\xBF\f\x0F\x02\x02" +
		"\xBF\xC0\x07\x12\x02\x02\xC0\xD4\x05\x1C\x0F\x10\xC1\xC2\f\x0E\x02\x02" +
		"\xC2\xC3\t\x02\x02\x02\xC3\xD4\x05\x1C\x0F\x0F\xC4\xC5\f\r\x02\x02\xC5" +
		"\xC6\t\x03\x02\x02\xC6\xD4\x05\x1C\x0F\x0E\xC7\xC8\f\f\x02\x02\xC8\xC9" +
		"\t\x04\x02\x02\xC9\xD4\x05\x1C\x0F\r\xCA\xCB\f\v\x02\x02\xCB\xCC\t\x05" +
		"\x02\x02\xCC\xD4\x05\x1C\x0F\f\xCD\xCE\f\n\x02\x02\xCE\xCF\x07\x1C\x02" +
		"\x02\xCF\xD4\x05\x1C\x0F\v\xD0\xD1\f\t\x02\x02\xD1\xD2\x07\x1D\x02\x02" +
		"\xD2\xD4\x05\x1C\x0F\n\xD3\xBE\x03\x02\x02\x02\xD3\xC1\x03\x02\x02\x02" +
		"\xD3\xC4\x03\x02\x02\x02\xD3\xC7\x03\x02\x02\x02\xD3\xCA\x03\x02\x02\x02" +
		"\xD3\xCD\x03\x02\x02\x02\xD3\xD0\x03\x02\x02\x02\xD4\xD7\x03\x02\x02\x02" +
		"\xD5\xD3\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\x1D\x03\x02\x02\x02" +
		"\xD7\xD5\x03\x02\x02\x02\xD8\xDD\x07\x1F\x02\x02\xD9\xDD\x07 \x02\x02" +
		"\xDA\xDD\x07\"\x02\x02\xDB\xDD\x07!\x02\x02\xDC\xD8\x03\x02\x02\x02\xDC" +
		"\xD9\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDB\x03\x02\x02\x02\xDD" +
		"\x1F\x03\x02\x02\x02\x1C#03;?CKOWZ]bgqu\x7F\x83\x89\x95\x98\xA0\xB9\xBC" +
		"\xD3\xD5\xDC";
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
	public varDeclaration(): VarDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VarDeclarationContext);
	}
	public expressionStmt(): ExpressionStmtContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStmtContext);
	}
	public readStmt(): ReadStmtContext | undefined {
		return this.tryGetRuleContext(0, ReadStmtContext);
	}
	public writeStmt(): WriteStmtContext | undefined {
		return this.tryGetRuleContext(0, WriteStmtContext);
	}
	public fileStmt(): FileStmtContext | undefined {
		return this.tryGetRuleContext(0, FileStmtContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public ifStmt(): IfStmtContext | undefined {
		return this.tryGetRuleContext(0, IfStmtContext);
	}
	public whileStmt(): WhileStmtContext | undefined {
		return this.tryGetRuleContext(0, WhileStmtContext);
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


export class VarDeclarationContext extends ParserRuleContext {
	public TYPE(): TerminalNode { return this.getToken(PLCParser.TYPE, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PLCParser.ID);
		} else {
			return this.getToken(PLCParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PLCParser.RULE_varDeclaration; }
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterVarDeclaration) {
			listener.enterVarDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitVarDeclaration) {
			listener.exitVarDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitVarDeclaration) {
			return visitor.visitVarDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStmtContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PLCParser.RULE_expressionStmt; }
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterExpressionStmt) {
			listener.enterExpressionStmt(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitExpressionStmt) {
			listener.exitExpressionStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitExpressionStmt) {
			return visitor.visitExpressionStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReadStmtContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PLCParser.ID);
		} else {
			return this.getToken(PLCParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PLCParser.RULE_readStmt; }
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterReadStmt) {
			listener.enterReadStmt(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitReadStmt) {
			listener.exitReadStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitReadStmt) {
			return visitor.visitReadStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WriteStmtContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return PLCParser.RULE_writeStmt; }
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterWriteStmt) {
			listener.enterWriteStmt(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitWriteStmt) {
			listener.exitWriteStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitWriteStmt) {
			return visitor.visitWriteStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FileStmtContext extends ParserRuleContext {
	public fileOpen(): FileOpenContext | undefined {
		return this.tryGetRuleContext(0, FileOpenContext);
	}
	public fileWrite(): FileWriteContext | undefined {
		return this.tryGetRuleContext(0, FileWriteContext);
	}
	public filePrint(): FilePrintContext | undefined {
		return this.tryGetRuleContext(0, FilePrintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PLCParser.RULE_fileStmt; }
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterFileStmt) {
			listener.enterFileStmt(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitFileStmt) {
			listener.exitFileStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitFileStmt) {
			return visitor.visitFileStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FileOpenContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PLCParser.RULE_fileOpen; }
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterFileOpen) {
			listener.enterFileOpen(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitFileOpen) {
			listener.exitFileOpen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitFileOpen) {
			return visitor.visitFileOpen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FileWriteContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return PLCParser.RULE_fileWrite; }
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterFileWrite) {
			listener.enterFileWrite(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitFileWrite) {
			listener.exitFileWrite(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitFileWrite) {
			return visitor.visitFileWrite(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FilePrintContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return PLCParser.RULE_filePrint; }
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterFilePrint) {
			listener.enterFilePrint(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitFilePrint) {
			listener.exitFilePrint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitFilePrint) {
			return visitor.visitFilePrint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return PLCParser.RULE_block; }
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStmtContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	public get ruleIndex(): number { return PLCParser.RULE_ifStmt; }
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterIfStmt) {
			listener.enterIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitIfStmt) {
			listener.exitIfStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitIfStmt) {
			return visitor.visitIfStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStmtContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PLCParser.RULE_whileStmt; }
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterWhileStmt) {
			listener.enterWhileStmt(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitWhileStmt) {
			listener.exitWhileStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitWhileStmt) {
			return visitor.visitWhileStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PLCParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class AssignmentContext extends ExpressionContext {
	public ID(): TerminalNode { return this.getToken(PLCParser.ID, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class ConcatContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterConcat) {
			listener.enterConcat(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitConcat) {
			listener.exitConcat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitConcat) {
			return visitor.visitConcat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MulDivModContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterMulDivMod) {
			listener.enterMulDivMod(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitMulDivMod) {
			listener.exitMulDivMod(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitMulDivMod) {
			return visitor.visitMulDivMod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddSubContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterAddSub) {
			listener.enterAddSub(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitAddSub) {
			listener.exitAddSub(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitAddSub) {
			return visitor.visitAddSub(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelOpContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterRelOp) {
			listener.enterRelOp(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitRelOp) {
			listener.exitRelOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitRelOp) {
			return visitor.visitRelOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqNeqContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterEqNeq) {
			listener.enterEqNeq(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitEqNeq) {
			listener.exitEqNeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitEqNeq) {
			return visitor.visitEqNeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterAnd) {
			listener.enterAnd(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitAnd) {
			listener.exitAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitAnd) {
			return visitor.visitAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterOr) {
			listener.enterOr(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitOr) {
			listener.exitOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitOr) {
			return visitor.visitOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterNot) {
			listener.enterNot(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitNot) {
			listener.exitNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitNot) {
			return visitor.visitNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryMinusContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterUnaryMinus) {
			listener.enterUnaryMinus(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitUnaryMinus) {
			listener.exitUnaryMinus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitUnaryMinus) {
			return visitor.visitUnaryMinus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParensContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterParens) {
			listener.enterParens(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitParens) {
			listener.exitParens(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitParens) {
			return visitor.visitParens(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralExprContext extends ExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterLiteralExpr) {
			listener.enterLiteralExpr(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitLiteralExpr) {
			listener.exitLiteralExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitLiteralExpr) {
			return visitor.visitLiteralExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VarExprContext extends ExpressionContext {
	public ID(): TerminalNode { return this.getToken(PLCParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterVarExpr) {
			listener.enterVarExpr(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitVarExpr) {
			listener.exitVarExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitVarExpr) {
			return visitor.visitVarExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiAssignmentContext extends ExpressionContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PLCParser.ID);
		} else {
			return this.getToken(PLCParser.ID, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterMultiAssignment) {
			listener.enterMultiAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitMultiAssignment) {
			listener.exitMultiAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitMultiAssignment) {
			return visitor.visitMultiAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PLCParser.RULE_literal; }
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class IntLiteralContext extends LiteralContext {
	public INT(): TerminalNode { return this.getToken(PLCParser.INT, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterIntLiteral) {
			listener.enterIntLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitIntLiteral) {
			listener.exitIntLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitIntLiteral) {
			return visitor.visitIntLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FloatLiteralContext extends LiteralContext {
	public FLOAT(): TerminalNode { return this.getToken(PLCParser.FLOAT, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterFloatLiteral) {
			listener.enterFloatLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitFloatLiteral) {
			listener.exitFloatLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitFloatLiteral) {
			return visitor.visitFloatLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BoolLiteralContext extends LiteralContext {
	public BOOL(): TerminalNode { return this.getToken(PLCParser.BOOL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterBoolLiteral) {
			listener.enterBoolLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitBoolLiteral) {
			listener.exitBoolLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitBoolLiteral) {
			return visitor.visitBoolLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralContext extends LiteralContext {
	public STRING(): TerminalNode { return this.getToken(PLCParser.STRING, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: PLCListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: PLCListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PLCVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


