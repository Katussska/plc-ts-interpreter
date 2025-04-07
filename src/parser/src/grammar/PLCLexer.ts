// Generated from src/grammar/PLC.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class PLCLexer extends Lexer {
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
	public static readonly BOOLEAN = 26;
	public static readonly INTEGER = 27;
	public static readonly IDENTIFIER = 28;
	public static readonly WS = 29;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"BOOLEAN", "INTEGER", "IDENTIFIER", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'let'", "':'", "'='", "'if'", "'('", "')'", "'else'", "'while'", 
		"'{'", "'}'", "'*'", "'/'", "'+'", "'-'", "'=='", "'!='", "'<'", "'>'", 
		"'<='", "'>='", "'and'", "'or'", "'not'", "'int'", "'bool'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "BOOLEAN", "INTEGER", 
		"IDENTIFIER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(PLCLexer._LITERAL_NAMES, PLCLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return PLCLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(PLCLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "PLC.g4"; }

	// @Override
	public get ruleNames(): string[] { return PLCLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return PLCLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return PLCLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return PLCLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x1F\xA5\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03" +
		"\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x05\x1B\x91\n\x1B\x03\x1C\x06\x1C\x94\n\x1C\r\x1C\x0E\x1C" +
		"\x95\x03\x1D\x03\x1D\x07\x1D\x9A\n\x1D\f\x1D\x0E\x1D\x9D\v\x1D\x03\x1E" +
		"\x06\x1E\xA0\n\x1E\r\x1E\x0E\x1E\xA1\x03\x1E\x03\x1E\x02\x02\x02\x1F\x03" +
		"\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t" +
		"\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02" +
		"\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17" +
		"-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F" +
		"\x03\x02\x06\x03\x022;\x05\x02C\\aac|\x06\x022;C\\aac|\x05\x02\v\f\x0F" +
		"\x0F\"\"\x02\xA8\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07" +
		"\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03" +
		"\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03" +
		"\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03" +
		"\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03" +
		"\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02" +
		"\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02" +
		"-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02" +
		"\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02" +
		"\x02;\x03\x02\x02\x02\x03=\x03\x02\x02\x02\x05A\x03\x02\x02\x02\x07C\x03" +
		"\x02\x02\x02\tE\x03\x02\x02\x02\vH\x03\x02\x02\x02\rJ\x03\x02\x02\x02" +
		"\x0FL\x03\x02\x02\x02\x11Q\x03\x02\x02\x02\x13W\x03\x02\x02\x02\x15Y\x03" +
		"\x02\x02\x02\x17[\x03\x02\x02\x02\x19]\x03\x02\x02\x02\x1B_\x03\x02\x02" +
		"\x02\x1Da\x03\x02\x02\x02\x1Fc\x03\x02\x02\x02!f\x03\x02\x02\x02#i\x03" +
		"\x02\x02\x02%k\x03\x02\x02\x02\'m\x03\x02\x02\x02)p\x03\x02\x02\x02+s" +
		"\x03\x02\x02\x02-w\x03\x02\x02\x02/z\x03\x02\x02\x021~\x03\x02\x02\x02" +
		"3\x82\x03\x02\x02\x025\x90\x03\x02\x02\x027\x93\x03\x02\x02\x029\x97\x03" +
		"\x02\x02\x02;\x9F\x03\x02\x02\x02=>\x07n\x02\x02>?\x07g\x02\x02?@\x07" +
		"v\x02\x02@\x04\x03\x02\x02\x02AB\x07<\x02\x02B\x06\x03\x02\x02\x02CD\x07" +
		"?\x02\x02D\b\x03\x02\x02\x02EF\x07k\x02\x02FG\x07h\x02\x02G\n\x03\x02" +
		"\x02\x02HI\x07*\x02\x02I\f\x03\x02\x02\x02JK\x07+\x02\x02K\x0E\x03\x02" +
		"\x02\x02LM\x07g\x02\x02MN\x07n\x02\x02NO\x07u\x02\x02OP\x07g\x02\x02P" +
		"\x10\x03\x02\x02\x02QR\x07y\x02\x02RS\x07j\x02\x02ST\x07k\x02\x02TU\x07" +
		"n\x02\x02UV\x07g\x02\x02V\x12\x03\x02\x02\x02WX\x07}\x02\x02X\x14\x03" +
		"\x02\x02\x02YZ\x07\x7F\x02\x02Z\x16\x03\x02\x02\x02[\\\x07,\x02\x02\\" +
		"\x18\x03\x02\x02\x02]^\x071\x02\x02^\x1A\x03\x02\x02\x02_`\x07-\x02\x02" +
		"`\x1C\x03\x02\x02\x02ab\x07/\x02\x02b\x1E\x03\x02\x02\x02cd\x07?\x02\x02" +
		"de\x07?\x02\x02e \x03\x02\x02\x02fg\x07#\x02\x02gh\x07?\x02\x02h\"\x03" +
		"\x02\x02\x02ij\x07>\x02\x02j$\x03\x02\x02\x02kl\x07@\x02\x02l&\x03\x02" +
		"\x02\x02mn\x07>\x02\x02no\x07?\x02\x02o(\x03\x02\x02\x02pq\x07@\x02\x02" +
		"qr\x07?\x02\x02r*\x03\x02\x02\x02st\x07c\x02\x02tu\x07p\x02\x02uv\x07" +
		"f\x02\x02v,\x03\x02\x02\x02wx\x07q\x02\x02xy\x07t\x02\x02y.\x03\x02\x02" +
		"\x02z{\x07p\x02\x02{|\x07q\x02\x02|}\x07v\x02\x02}0\x03\x02\x02\x02~\x7F" +
		"\x07k\x02\x02\x7F\x80\x07p\x02\x02\x80\x81\x07v\x02\x02\x812\x03\x02\x02" +
		"\x02\x82\x83\x07d\x02\x02\x83\x84\x07q\x02\x02\x84\x85\x07q\x02\x02\x85" +
		"\x86\x07n\x02\x02\x864\x03\x02\x02\x02\x87\x88\x07v\x02\x02\x88\x89\x07" +
		"t\x02\x02\x89\x8A\x07w\x02\x02\x8A\x91\x07g\x02\x02\x8B\x8C\x07h\x02\x02" +
		"\x8C\x8D\x07c\x02\x02\x8D\x8E\x07n\x02\x02\x8E\x8F\x07u\x02\x02\x8F\x91" +
		"\x07g\x02\x02\x90\x87\x03\x02\x02\x02\x90\x8B\x03\x02\x02\x02\x916\x03" +
		"\x02\x02\x02\x92\x94\t\x02\x02\x02\x93\x92\x03\x02\x02\x02\x94\x95\x03" +
		"\x02\x02\x02\x95\x93\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x968\x03" +
		"\x02\x02\x02\x97\x9B\t\x03\x02\x02\x98\x9A\t\x04\x02\x02\x99\x98\x03\x02" +
		"\x02\x02\x9A\x9D\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9B\x9C\x03\x02" +
		"\x02\x02\x9C:\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9E\xA0\t\x05\x02" +
		"\x02\x9F\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\x9F\x03\x02\x02" +
		"\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA4\b\x1E\x02" +
		"\x02\xA4<\x03\x02\x02\x02\x07\x02\x90\x95\x9B\xA1\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PLCLexer.__ATN) {
			PLCLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(PLCLexer._serializedATN));
		}

		return PLCLexer.__ATN;
	}

}

