// Generated from src/grammar/PLC.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { PLCListener } from './PLCListener';
import { PLCVisitor } from './PLCVisitor';

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
  public static readonly INT = 26;
  public static readonly FLOAT = 27;
  public static readonly STRING = 28;
  public static readonly BOOL = 29;
  public static readonly TYPE = 30;
  public static readonly ID = 31;
  public static readonly COMMENT = 32;
  public static readonly WS = 33;
  public static readonly RULE_program = 0;
  public static readonly RULE_statement = 1;
  public static readonly RULE_varDeclaration = 2;
  public static readonly RULE_expressionStmt = 3;
  public static readonly RULE_readStmt = 4;
  public static readonly RULE_writeStmt = 5;
  public static readonly RULE_block = 6;
  public static readonly RULE_ifStmt = 7;
  public static readonly RULE_whileStmt = 8;
  public static readonly RULE_expression = 9;
  public static readonly RULE_literal = 10;
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'program',
    'statement',
    'varDeclaration',
    'expressionStmt',
    'readStmt',
    'writeStmt',
    'block',
    'ifStmt',
    'whileStmt',
    'expression',
    'literal',
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "';'",
    "','",
    "'read'",
    "'write'",
    "'{'",
    "'}'",
    "'if'",
    "'('",
    "')'",
    "'else'",
    "'while'",
    "'='",
    "'.'",
    "'*'",
    "'/'",
    "'%'",
    "'+'",
    "'-'",
    "'<'",
    "'>'",
    "'=='",
    "'!='",
    "'&&'",
    "'||'",
    "'!'",
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    'INT',
    'FLOAT',
    'STRING',
    'BOOL',
    'TYPE',
    'ID',
    'COMMENT',
    'WS',
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    PLCParser._LITERAL_NAMES,
    PLCParser._SYMBOLIC_NAMES,
    [],
  );

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return PLCParser.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return 'PLC.g4';
  }

  // @Override
  public get ruleNames(): string[] {
    return PLCParser.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return PLCParser._serializedATN;
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string,
  ): FailedPredicateException {
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
        this.state = 25;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << PLCParser.T__2) |
              (1 << PLCParser.T__3) |
              (1 << PLCParser.T__4) |
              (1 << PLCParser.T__6) |
              (1 << PLCParser.T__7) |
              (1 << PLCParser.T__10) |
              (1 << PLCParser.T__17) |
              (1 << PLCParser.T__24) |
              (1 << PLCParser.INT) |
              (1 << PLCParser.FLOAT) |
              (1 << PLCParser.STRING) |
              (1 << PLCParser.BOOL) |
              (1 << PLCParser.TYPE) |
              (1 << PLCParser.ID))) !==
            0
        ) {
          {
            {
              this.state = 22;
              this.statement();
            }
          }
          this.state = 27;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 28;
        this.match(PLCParser.EOF);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public statement(): StatementContext {
    let _localctx: StatementContext = new StatementContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 2, PLCParser.RULE_statement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 37;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case PLCParser.TYPE:
            {
              this.state = 30;
              this.varDeclaration();
            }
            break;
          case PLCParser.T__7:
          case PLCParser.T__17:
          case PLCParser.T__24:
          case PLCParser.INT:
          case PLCParser.FLOAT:
          case PLCParser.STRING:
          case PLCParser.BOOL:
          case PLCParser.ID:
            {
              this.state = 31;
              this.expressionStmt();
            }
            break;
          case PLCParser.T__2:
            {
              this.state = 32;
              this.readStmt();
            }
            break;
          case PLCParser.T__3:
            {
              this.state = 33;
              this.writeStmt();
            }
            break;
          case PLCParser.T__4:
            {
              this.state = 34;
              this.block();
            }
            break;
          case PLCParser.T__6:
            {
              this.state = 35;
              this.ifStmt();
            }
            break;
          case PLCParser.T__10:
            {
              this.state = 36;
              this.whileStmt();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this.state = 40;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
          case 1:
            {
              this.state = 39;
              this.match(PLCParser.T__0);
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public varDeclaration(): VarDeclarationContext {
    let _localctx: VarDeclarationContext = new VarDeclarationContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 4, PLCParser.RULE_varDeclaration);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 42;
        this.match(PLCParser.TYPE);
        this.state = 43;
        this.match(PLCParser.ID);
        this.state = 48;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PLCParser.T__1) {
          {
            {
              this.state = 44;
              this.match(PLCParser.T__1);
              this.state = 45;
              this.match(PLCParser.ID);
            }
          }
          this.state = 50;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 51;
        this.match(PLCParser.T__0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public expressionStmt(): ExpressionStmtContext {
    let _localctx: ExpressionStmtContext = new ExpressionStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 6, PLCParser.RULE_expressionStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 53;
        this.expression(0);
        this.state = 54;
        this.match(PLCParser.T__0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
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
        this.state = 56;
        this.match(PLCParser.T__2);
        this.state = 57;
        this.match(PLCParser.ID);
        this.state = 62;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PLCParser.T__1) {
          {
            {
              this.state = 58;
              this.match(PLCParser.T__1);
              this.state = 59;
              this.match(PLCParser.ID);
            }
          }
          this.state = 64;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 65;
        this.match(PLCParser.T__0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public writeStmt(): WriteStmtContext {
    let _localctx: WriteStmtContext = new WriteStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 10, PLCParser.RULE_writeStmt);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 67;
        this.match(PLCParser.T__3);
        this.state = 76;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << PLCParser.T__7) |
              (1 << PLCParser.T__17) |
              (1 << PLCParser.T__24) |
              (1 << PLCParser.INT) |
              (1 << PLCParser.FLOAT) |
              (1 << PLCParser.STRING) |
              (1 << PLCParser.BOOL) |
              (1 << PLCParser.ID))) !==
            0
        ) {
          {
            this.state = 68;
            this.expression(0);
            this.state = 73;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === PLCParser.T__1) {
              {
                {
                  this.state = 69;
                  this.match(PLCParser.T__1);
                  this.state = 70;
                  this.expression(0);
                }
              }
              this.state = 75;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
        }

        this.state = 78;
        this.match(PLCParser.T__0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public block(): BlockContext {
    let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
    this.enterRule(_localctx, 12, PLCParser.RULE_block);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 80;
        this.match(PLCParser.T__4);
        this.state = 84;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << PLCParser.T__2) |
              (1 << PLCParser.T__3) |
              (1 << PLCParser.T__4) |
              (1 << PLCParser.T__6) |
              (1 << PLCParser.T__7) |
              (1 << PLCParser.T__10) |
              (1 << PLCParser.T__17) |
              (1 << PLCParser.T__24) |
              (1 << PLCParser.INT) |
              (1 << PLCParser.FLOAT) |
              (1 << PLCParser.STRING) |
              (1 << PLCParser.BOOL) |
              (1 << PLCParser.TYPE) |
              (1 << PLCParser.ID))) !==
            0
        ) {
          {
            {
              this.state = 81;
              this.statement();
            }
          }
          this.state = 86;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 87;
        this.match(PLCParser.T__5);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public ifStmt(): IfStmtContext {
    let _localctx: IfStmtContext = new IfStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 14, PLCParser.RULE_ifStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 89;
        this.match(PLCParser.T__6);
        this.state = 90;
        this.match(PLCParser.T__7);
        this.state = 91;
        this.expression(0);
        this.state = 92;
        this.match(PLCParser.T__8);
        this.state = 93;
        this.statement();
        this.state = 96;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
          case 1:
            {
              this.state = 94;
              this.match(PLCParser.T__9);
              this.state = 95;
              this.statement();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public whileStmt(): WhileStmtContext {
    let _localctx: WhileStmtContext = new WhileStmtContext(
      this._ctx,
      this.state,
    );
    this.enterRule(_localctx, 16, PLCParser.RULE_whileStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 98;
        this.match(PLCParser.T__10);
        this.state = 99;
        this.match(PLCParser.T__7);
        this.state = 100;
        this.expression(0);
        this.state = 101;
        this.match(PLCParser.T__8);
        this.state = 102;
        this.statement();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
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
    let _localctx: ExpressionContext = new ExpressionContext(
      this._ctx,
      _parentState,
    );
    let _prevctx: ExpressionContext = _localctx;
    let _startState: number = 18;
    this.enterRecursionRule(_localctx, 18, PLCParser.RULE_expression, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 130;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
          case 1:
            {
              _localctx = new AssignmentContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;

              this.state = 105;
              this.match(PLCParser.ID);
              this.state = 106;
              this.match(PLCParser.T__11);
              this.state = 107;
              this.expression(14);
            }
            break;

          case 2:
            {
              _localctx = new NotContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 108;
              this.match(PLCParser.T__24);
              this.state = 109;
              this.expression(6);
            }
            break;

          case 3:
            {
              _localctx = new UnaryMinusContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 110;
              this.match(PLCParser.T__17);
              this.state = 111;
              this.expression(5);
            }
            break;

          case 4:
            {
              _localctx = new ParensContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 112;
              this.match(PLCParser.T__7);
              this.state = 113;
              this.expression(0);
              this.state = 114;
              this.match(PLCParser.T__8);
            }
            break;

          case 5:
            {
              _localctx = new LiteralExprContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 116;
              this.literal();
            }
            break;

          case 6:
            {
              _localctx = new VarExprContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 117;
              this.match(PLCParser.ID);
            }
            break;

          case 7:
            {
              _localctx = new MultiAssignmentContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 118;
              this.match(PLCParser.ID);
              this.state = 119;
              this.match(PLCParser.T__11);
              this.state = 120;
              this.expression(0);
              this.state = 127;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(
                this._input,
                9,
                this._ctx,
              );
              while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                  {
                    {
                      this.state = 121;
                      this.match(PLCParser.T__1);
                      this.state = 122;
                      this.match(PLCParser.ID);
                      this.state = 123;
                      this.match(PLCParser.T__11);
                      this.state = 124;
                      this.expression(0);
                    }
                  }
                }
                this.state = 129;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(
                  this._input,
                  9,
                  this._ctx,
                );
              }
            }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 155;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              this.state = 153;
              this._errHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(this._input, 11, this._ctx)
              ) {
                case 1:
                  {
                    _localctx = new ConcatContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      PLCParser.RULE_expression,
                    );
                    this.state = 132;
                    if (!this.precpred(this._ctx, 13)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 13)',
                      );
                    }
                    this.state = 133;
                    this.match(PLCParser.T__12);
                    this.state = 134;
                    this.expression(14);
                  }
                  break;

                case 2:
                  {
                    _localctx = new MulDivModContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      PLCParser.RULE_expression,
                    );
                    this.state = 135;
                    if (!this.precpred(this._ctx, 12)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 12)',
                      );
                    }
                    this.state = 136;
                    _la = this._input.LA(1);
                    if (
                      !(
                        (_la & ~0x1f) === 0 &&
                        ((1 << _la) &
                          ((1 << PLCParser.T__13) |
                            (1 << PLCParser.T__14) |
                            (1 << PLCParser.T__15))) !==
                          0
                      )
                    ) {
                      this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                      }

                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 137;
                    this.expression(13);
                  }
                  break;

                case 3:
                  {
                    _localctx = new AddSubContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      PLCParser.RULE_expression,
                    );
                    this.state = 138;
                    if (!this.precpred(this._ctx, 11)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 11)',
                      );
                    }
                    this.state = 139;
                    _la = this._input.LA(1);
                    if (!(_la === PLCParser.T__16 || _la === PLCParser.T__17)) {
                      this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                      }

                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 140;
                    this.expression(12);
                  }
                  break;

                case 4:
                  {
                    _localctx = new RelOpContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      PLCParser.RULE_expression,
                    );
                    this.state = 141;
                    if (!this.precpred(this._ctx, 10)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 10)',
                      );
                    }
                    this.state = 142;
                    _la = this._input.LA(1);
                    if (!(_la === PLCParser.T__18 || _la === PLCParser.T__19)) {
                      this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                      }

                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 143;
                    this.expression(11);
                  }
                  break;

                case 5:
                  {
                    _localctx = new EqNeqContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      PLCParser.RULE_expression,
                    );
                    this.state = 144;
                    if (!this.precpred(this._ctx, 9)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 9)',
                      );
                    }
                    this.state = 145;
                    _la = this._input.LA(1);
                    if (!(_la === PLCParser.T__20 || _la === PLCParser.T__21)) {
                      this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                      }

                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 146;
                    this.expression(10);
                  }
                  break;

                case 6:
                  {
                    _localctx = new AndContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      PLCParser.RULE_expression,
                    );
                    this.state = 147;
                    if (!this.precpred(this._ctx, 8)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 8)',
                      );
                    }
                    this.state = 148;
                    this.match(PLCParser.T__22);
                    this.state = 149;
                    this.expression(9);
                  }
                  break;

                case 7:
                  {
                    _localctx = new OrContext(
                      new ExpressionContext(_parentctx, _parentState),
                    );
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      PLCParser.RULE_expression,
                    );
                    this.state = 150;
                    if (!this.precpred(this._ctx, 7)) {
                      throw this.createFailedPredicateException(
                        'this.precpred(this._ctx, 7)',
                      );
                    }
                    this.state = 151;
                    this.match(PLCParser.T__23);
                    this.state = 152;
                    this.expression(8);
                  }
                  break;
              }
            }
          }
          this.state = 157;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public literal(): LiteralContext {
    let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
    this.enterRule(_localctx, 20, PLCParser.RULE_literal);
    try {
      this.state = 162;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PLCParser.INT:
          _localctx = new IntLiteralContext(_localctx);
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 158;
            this.match(PLCParser.INT);
          }
          break;
        case PLCParser.FLOAT:
          _localctx = new FloatLiteralContext(_localctx);
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 159;
            this.match(PLCParser.FLOAT);
          }
          break;
        case PLCParser.BOOL:
          _localctx = new BoolLiteralContext(_localctx);
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 160;
            this.match(PLCParser.BOOL);
          }
          break;
        case PLCParser.STRING:
          _localctx = new StringLiteralContext(_localctx);
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 161;
            this.match(PLCParser.STRING);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public sempred(
    _localctx: RuleContext,
    ruleIndex: number,
    predIndex: number,
  ): boolean {
    switch (ruleIndex) {
      case 9:
        return this.expression_sempred(
          _localctx as ExpressionContext,
          predIndex,
        );
    }
    return true;
  }
  private expression_sempred(
    _localctx: ExpressionContext,
    predIndex: number,
  ): boolean {
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
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03#\xA7\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x07\x02' +
    '\x1A\n\x02\f\x02\x0E\x02\x1D\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03' +
    '\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03(\n\x03\x03\x03\x05\x03+\n' +
    '\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07\x041\n\x04\f\x04\x0E\x044\v\x04' +
    '\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06' +
    '\x07\x06?\n\x06\f\x06\x0E\x06B\v\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03' +
    '\x07\x03\x07\x07\x07J\n\x07\f\x07\x0E\x07M\v\x07\x05\x07O\n\x07\x03\x07' +
    '\x03\x07\x03\b\x03\b\x07\bU\n\b\f\b\x0E\bX\v\b\x03\b\x03\b\x03\t\x03\t' +
    '\x03\t\x03\t\x03\t\x03\t\x03\t\x05\tc\n\t\x03\n\x03\n\x03\n\x03\n\x03' +
    '\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03' +
    '\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\x80' +
    '\n\v\f\v\x0E\v\x83\v\v\x05\v\x85\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03' +
    '\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03' +
    '\v\x03\v\x03\v\x03\v\x07\v\x9C\n\v\f\v\x0E\v\x9F\v\v\x03\f\x03\f\x03\f' +
    '\x03\f\x05\f\xA5\n\f\x03\f\x02\x02\x03\x14\r\x02\x02\x04\x02\x06\x02\b' +
    '\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x02\x06\x03\x02' +
    '\x10\x12\x03\x02\x13\x14\x03\x02\x15\x16\x03\x02\x17\x18\x02\xBA\x02\x1B' +
    "\x03\x02\x02\x02\x04\'\x03\x02\x02\x02\x06,\x03\x02\x02\x02\b7\x03\x02" +
    '\x02\x02\n:\x03\x02\x02\x02\fE\x03\x02\x02\x02\x0ER\x03\x02\x02\x02\x10' +
    '[\x03\x02\x02\x02\x12d\x03\x02\x02\x02\x14\x84\x03\x02\x02\x02\x16\xA4' +
    '\x03\x02\x02\x02\x18\x1A\x05\x04\x03\x02\x19\x18\x03\x02\x02\x02\x1A\x1D' +
    '\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C\x1E' +
    '\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1E\x1F\x07\x02\x02\x03\x1F\x03' +
    '\x03\x02\x02\x02 (\x05\x06\x04\x02!(\x05\b\x05\x02"(\x05\n\x06\x02#(' +
    "\x05\f\x07\x02$(\x05\x0E\b\x02%(\x05\x10\t\x02&(\x05\x12\n\x02\' \x03" +
    "\x02\x02\x02\'!\x03\x02\x02\x02\'\"\x03\x02\x02\x02\'#\x03\x02\x02\x02" +
    "\'$\x03\x02\x02\x02\'%\x03\x02\x02\x02\'&\x03\x02\x02\x02(*\x03\x02\x02" +
    '\x02)+\x07\x03\x02\x02*)\x03\x02\x02\x02*+\x03\x02\x02\x02+\x05\x03\x02' +
    '\x02\x02,-\x07 \x02\x02-2\x07!\x02\x02./\x07\x04\x02\x02/1\x07!\x02\x02' +
    '0.\x03\x02\x02\x0214\x03\x02\x02\x0220\x03\x02\x02\x0223\x03\x02\x02\x02' +
    '35\x03\x02\x02\x0242\x03\x02\x02\x0256\x07\x03\x02\x026\x07\x03\x02\x02' +
    '\x0278\x05\x14\v\x0289\x07\x03\x02\x029\t\x03\x02\x02\x02:;\x07\x05\x02' +
    '\x02;@\x07!\x02\x02<=\x07\x04\x02\x02=?\x07!\x02\x02><\x03\x02\x02\x02' +
    '?B\x03\x02\x02\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02AC\x03\x02\x02\x02' +
    'B@\x03\x02\x02\x02CD\x07\x03\x02\x02D\v\x03\x02\x02\x02EN\x07\x06\x02' +
    '\x02FK\x05\x14\v\x02GH\x07\x04\x02\x02HJ\x05\x14\v\x02IG\x03\x02\x02\x02' +
    'JM\x03\x02\x02\x02KI\x03\x02\x02\x02KL\x03\x02\x02\x02LO\x03\x02\x02\x02' +
    'MK\x03\x02\x02\x02NF\x03\x02\x02\x02NO\x03\x02\x02\x02OP\x03\x02\x02\x02' +
    'PQ\x07\x03\x02\x02Q\r\x03\x02\x02\x02RV\x07\x07\x02\x02SU\x05\x04\x03' +
    '\x02TS\x03\x02\x02\x02UX\x03\x02\x02\x02VT\x03\x02\x02\x02VW\x03\x02\x02' +
    '\x02WY\x03\x02\x02\x02XV\x03\x02\x02\x02YZ\x07\b\x02\x02Z\x0F\x03\x02' +
    '\x02\x02[\\\x07\t\x02\x02\\]\x07\n\x02\x02]^\x05\x14\v\x02^_\x07\v\x02' +
    '\x02_b\x05\x04\x03\x02`a\x07\f\x02\x02ac\x05\x04\x03\x02b`\x03\x02\x02' +
    '\x02bc\x03\x02\x02\x02c\x11\x03\x02\x02\x02de\x07\r\x02\x02ef\x07\n\x02' +
    '\x02fg\x05\x14\v\x02gh\x07\v\x02\x02hi\x05\x04\x03\x02i\x13\x03\x02\x02' +
    '\x02jk\b\v\x01\x02kl\x07!\x02\x02lm\x07\x0E\x02\x02m\x85\x05\x14\v\x10' +
    'no\x07\x1B\x02\x02o\x85\x05\x14\v\bpq\x07\x14\x02\x02q\x85\x05\x14\v\x07' +
    'rs\x07\n\x02\x02st\x05\x14\v\x02tu\x07\v\x02\x02u\x85\x03\x02\x02\x02' +
    'v\x85\x05\x16\f\x02w\x85\x07!\x02\x02xy\x07!\x02\x02yz\x07\x0E\x02\x02' +
    'z\x81\x05\x14\v\x02{|\x07\x04\x02\x02|}\x07!\x02\x02}~\x07\x0E\x02\x02' +
    '~\x80\x05\x14\v\x02\x7F{\x03\x02\x02\x02\x80\x83\x03\x02\x02\x02\x81\x7F' +
    '\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x85\x03\x02\x02\x02\x83\x81' +
    '\x03\x02\x02\x02\x84j\x03\x02\x02\x02\x84n\x03\x02\x02\x02\x84p\x03\x02' +
    '\x02\x02\x84r\x03\x02\x02\x02\x84v\x03\x02\x02\x02\x84w\x03\x02\x02\x02' +
    '\x84x\x03\x02\x02\x02\x85\x9D\x03\x02\x02\x02\x86\x87\f\x0F\x02\x02\x87' +
    '\x88\x07\x0F\x02\x02\x88\x9C\x05\x14\v\x10\x89\x8A\f\x0E\x02\x02\x8A\x8B' +
    '\t\x02\x02\x02\x8B\x9C\x05\x14\v\x0F\x8C\x8D\f\r\x02\x02\x8D\x8E\t\x03' +
    '\x02\x02\x8E\x9C\x05\x14\v\x0E\x8F\x90\f\f\x02\x02\x90\x91\t\x04\x02\x02' +
    '\x91\x9C\x05\x14\v\r\x92\x93\f\v\x02\x02\x93\x94\t\x05\x02\x02\x94\x9C' +
    '\x05\x14\v\f\x95\x96\f\n\x02\x02\x96\x97\x07\x19\x02\x02\x97\x9C\x05\x14' +
    '\v\v\x98\x99\f\t\x02\x02\x99\x9A\x07\x1A\x02\x02\x9A\x9C\x05\x14\v\n\x9B' +
    '\x86\x03\x02\x02\x02\x9B\x89\x03\x02\x02\x02\x9B\x8C\x03\x02\x02\x02\x9B' +
    '\x8F\x03\x02\x02\x02\x9B\x92\x03\x02\x02\x02\x9B\x95\x03\x02\x02\x02\x9B' +
    '\x98\x03\x02\x02\x02\x9C\x9F\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9D' +
    '\x9E\x03\x02\x02\x02\x9E\x15\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\xA0' +
    '\xA5\x07\x1C\x02\x02\xA1\xA5\x07\x1D\x02\x02\xA2\xA5\x07\x1F\x02\x02\xA3' +
    '\xA5\x07\x1E\x02\x02\xA4\xA0\x03\x02\x02\x02\xA4\xA1\x03\x02\x02\x02\xA4' +
    '\xA2\x03\x02\x02\x02\xA4\xA3\x03\x02\x02\x02\xA5\x17\x03\x02\x02\x02\x10' +
    "\x1B\'*2@KNVb\x81\x84\x9B\x9D\xA4";
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!PLCParser.__ATN) {
      PLCParser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(PLCParser._serializedATN),
      );
    }

    return PLCParser.__ATN;
  }
}

export class ProgramContext extends ParserRuleContext {
  public EOF(): TerminalNode {
    return this.getToken(PLCParser.EOF, 0);
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
  public get ruleIndex(): number {
    return PLCParser.RULE_program;
  }
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
  public get ruleIndex(): number {
    return PLCParser.RULE_statement;
  }
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
  public TYPE(): TerminalNode {
    return this.getToken(PLCParser.TYPE, 0);
  }
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
  public get ruleIndex(): number {
    return PLCParser.RULE_varDeclaration;
  }
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
  public get ruleIndex(): number {
    return PLCParser.RULE_expressionStmt;
  }
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
  public get ruleIndex(): number {
    return PLCParser.RULE_readStmt;
  }
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
  public get ruleIndex(): number {
    return PLCParser.RULE_writeStmt;
  }
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
  public get ruleIndex(): number {
    return PLCParser.RULE_block;
  }
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
  public get ruleIndex(): number {
    return PLCParser.RULE_ifStmt;
  }
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
  public get ruleIndex(): number {
    return PLCParser.RULE_whileStmt;
  }
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
  public get ruleIndex(): number {
    return PLCParser.RULE_expression;
  }
  public copyFrom(ctx: ExpressionContext): void {
    super.copyFrom(ctx);
  }
}
export class AssignmentContext extends ExpressionContext {
  public ID(): TerminalNode {
    return this.getToken(PLCParser.ID, 0);
  }
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
  public ID(): TerminalNode {
    return this.getToken(PLCParser.ID, 0);
  }
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
  public get ruleIndex(): number {
    return PLCParser.RULE_literal;
  }
  public copyFrom(ctx: LiteralContext): void {
    super.copyFrom(ctx);
  }
}
export class IntLiteralContext extends LiteralContext {
  public INT(): TerminalNode {
    return this.getToken(PLCParser.INT, 0);
  }
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
  public FLOAT(): TerminalNode {
    return this.getToken(PLCParser.FLOAT, 0);
  }
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
  public BOOL(): TerminalNode {
    return this.getToken(PLCParser.BOOL, 0);
  }
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
  public STRING(): TerminalNode {
    return this.getToken(PLCParser.STRING, 0);
  }
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
