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
	public static readonly INT = 26;
	public static readonly FLOAT = 27;
	public static readonly STRING = 28;
	public static readonly BOOL = 29;
	public static readonly TYPE = 30;
	public static readonly ID = 31;
	public static readonly COMMENT = 32;
	public static readonly WS = 33;

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
		"INT", "FLOAT", "STRING", "BOOL", "TYPE", "ID", "COMMENT", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "','", "';'", "'read'", "'write'", "'{'", "'}'", "'if'", "'('", 
		"')'", "'else'", "'while'", "'='", "'.'", "'*'", "'/'", "'%'", "'+'", 
		"'-'", "'<'", "'>'", "'=='", "'!='", "'&&'", "'||'", "'!'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "INT", "FLOAT", 
		"STRING", "BOOL", "TYPE", "ID", "COMMENT", "WS",
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02#\xE6\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x17" +
		"\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x1A" +
		"\x03\x1A\x03\x1B\x06\x1B\x8C\n\x1B\r\x1B\x0E\x1B\x8D\x03\x1C\x06\x1C\x91" +
		"\n\x1C\r\x1C\x0E\x1C\x92\x03\x1C\x03\x1C\x07\x1C\x97\n\x1C\f\x1C\x0E\x1C" +
		"\x9A\v\x1C\x03\x1C\x03\x1C\x06\x1C\x9E\n\x1C\r\x1C\x0E\x1C\x9F\x05\x1C" +
		"\xA2\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\xA8\n\x1D\f\x1D\x0E" +
		"\x1D\xAB\v\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\xB8\n\x1E\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\xCC\n\x1F" +
		"\x03 \x03 \x07 \xD0\n \f \x0E \xD3\v \x03!\x03!\x03!\x03!\x07!\xD9\n!" +
		"\f!\x0E!\xDC\v!\x03!\x03!\x03\"\x06\"\xE1\n\"\r\"\x0E\"\xE2\x03\"\x03" +
		"\"\x02\x02\x02#\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07" +
		"\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E" +
		"\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02" +
		"\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02" +
		"\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#\x03\x02\t\x03\x022;\x04" +
		"\x02$$^^\x07\x02$$^^ppttvv\x04\x02C\\c|\x05\x022;C\\c|\x04\x02\f\f\x0F" +
		"\x0F\x05\x02\v\f\x0F\x0F\"\"\x02\xF3\x02\x03\x03\x02\x02\x02\x02\x05\x03" +
		"\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02" +
		"\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02" +
		"\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02" +
		"\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02" +
		"\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02" +
		"\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02" +
		"+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02" +
		"\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02" +
		"\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03" +
		"\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x03E\x03\x02\x02" +
		"\x02\x05G\x03\x02\x02\x02\x07I\x03\x02\x02\x02\tN\x03\x02\x02\x02\vT\x03" +
		"\x02\x02\x02\rV\x03\x02\x02\x02\x0FX\x03\x02\x02\x02\x11[\x03\x02\x02" +
		"\x02\x13]\x03\x02\x02\x02\x15_\x03\x02\x02\x02\x17d\x03\x02\x02\x02\x19" +
		"j\x03\x02\x02\x02\x1Bl\x03\x02\x02\x02\x1Dn\x03\x02\x02\x02\x1Fp\x03\x02" +
		"\x02\x02!r\x03\x02\x02\x02#t\x03\x02\x02\x02%v\x03\x02\x02\x02\'x\x03" +
		"\x02\x02\x02)z\x03\x02\x02\x02+|\x03\x02\x02\x02-\x7F\x03\x02\x02\x02" +
		"/\x82\x03\x02\x02\x021\x85\x03\x02\x02\x023\x88\x03\x02\x02\x025\x8B\x03" +
		"\x02\x02\x027\xA1\x03\x02\x02\x029\xA3\x03\x02\x02\x02;\xB7\x03\x02\x02" +
		"\x02=\xCB\x03\x02\x02\x02?\xCD\x03\x02\x02\x02A\xD4\x03\x02\x02\x02C\xE0" +
		"\x03\x02\x02\x02EF\x07.\x02\x02F\x04\x03\x02\x02\x02GH\x07=\x02\x02H\x06" +
		"\x03\x02\x02\x02IJ\x07t\x02\x02JK\x07g\x02\x02KL\x07c\x02\x02LM\x07f\x02" +
		"\x02M\b\x03\x02\x02\x02NO\x07y\x02\x02OP\x07t\x02\x02PQ\x07k\x02\x02Q" +
		"R\x07v\x02\x02RS\x07g\x02\x02S\n\x03\x02\x02\x02TU\x07}\x02\x02U\f\x03" +
		"\x02\x02\x02VW\x07\x7F\x02\x02W\x0E\x03\x02\x02\x02XY\x07k\x02\x02YZ\x07" +
		"h\x02\x02Z\x10\x03\x02\x02\x02[\\\x07*\x02\x02\\\x12\x03\x02\x02\x02]" +
		"^\x07+\x02\x02^\x14\x03\x02\x02\x02_`\x07g\x02\x02`a\x07n\x02\x02ab\x07" +
		"u\x02\x02bc\x07g\x02\x02c\x16\x03\x02\x02\x02de\x07y\x02\x02ef\x07j\x02" +
		"\x02fg\x07k\x02\x02gh\x07n\x02\x02hi\x07g\x02\x02i\x18\x03\x02\x02\x02" +
		"jk\x07?\x02\x02k\x1A\x03\x02\x02\x02lm\x070\x02\x02m\x1C\x03\x02\x02\x02" +
		"no\x07,\x02\x02o\x1E\x03\x02\x02\x02pq\x071\x02\x02q \x03\x02\x02\x02" +
		"rs\x07\'\x02\x02s\"\x03\x02\x02\x02tu\x07-\x02\x02u$\x03\x02\x02\x02v" +
		"w\x07/\x02\x02w&\x03\x02\x02\x02xy\x07>\x02\x02y(\x03\x02\x02\x02z{\x07" +
		"@\x02\x02{*\x03\x02\x02\x02|}\x07?\x02\x02}~\x07?\x02\x02~,\x03\x02\x02" +
		"\x02\x7F\x80\x07#\x02\x02\x80\x81\x07?\x02\x02\x81.\x03\x02\x02\x02\x82" +
		"\x83\x07(\x02\x02\x83\x84\x07(\x02\x02\x840\x03\x02\x02\x02\x85\x86\x07" +
		"~\x02\x02\x86\x87\x07~\x02\x02\x872\x03\x02\x02\x02\x88\x89\x07#\x02\x02" +
		"\x894\x03\x02\x02\x02\x8A\x8C\t\x02\x02\x02\x8B\x8A\x03\x02\x02\x02\x8C" +
		"\x8D\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E" +
		"6\x03\x02\x02\x02\x8F\x91\t\x02\x02\x02\x90\x8F\x03\x02\x02\x02\x91\x92" +
		"\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x94" +
		"\x03\x02\x02\x02\x94\x98\x070\x02\x02\x95\x97\t\x02\x02\x02\x96\x95\x03" +
		"\x02\x02\x02\x97\x9A\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x98\x99\x03" +
		"\x02\x02\x02\x99\xA2\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9B\x9D\x07" +
		"0\x02\x02\x9C\x9E\t\x02\x02\x02\x9D\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02" +
		"\x02\x02\x9F\x9D\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA2\x03\x02" +
		"\x02\x02\xA1\x90\x03\x02\x02\x02\xA1\x9B\x03\x02\x02\x02\xA28\x03\x02" +
		"\x02\x02\xA3\xA9\x07$\x02\x02\xA4\xA8\n\x03\x02\x02\xA5\xA6\x07^\x02\x02" +
		"\xA6\xA8\t\x04\x02\x02\xA7\xA4\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02" +
		"\xA8\xAB\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02" +
		"\xAA\xAC\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAC\xAD\x07$\x02\x02" +
		"\xAD:\x03\x02\x02\x02\xAE\xAF\x07v\x02\x02\xAF\xB0\x07t\x02\x02\xB0\xB1" +
		"\x07w\x02\x02\xB1\xB8\x07g\x02\x02\xB2\xB3\x07h\x02\x02\xB3\xB4\x07c\x02" +
		"\x02\xB4\xB5\x07n\x02\x02\xB5\xB6\x07u\x02\x02\xB6\xB8\x07g\x02\x02\xB7" +
		"\xAE\x03\x02\x02\x02\xB7\xB2\x03\x02\x02\x02\xB8<\x03\x02\x02\x02\xB9" +
		"\xBA\x07k\x02\x02\xBA\xBB\x07p\x02\x02\xBB\xCC\x07v\x02\x02\xBC\xBD\x07" +
		"h\x02\x02\xBD\xBE\x07n\x02\x02\xBE\xBF\x07q\x02\x02\xBF\xC0\x07c\x02\x02" +
		"\xC0\xCC\x07v\x02\x02\xC1\xC2\x07d\x02\x02\xC2\xC3\x07q\x02\x02\xC3\xC4" +
		"\x07q\x02\x02\xC4\xCC\x07n\x02\x02\xC5\xC6\x07u\x02\x02\xC6\xC7\x07v\x02" +
		"\x02\xC7\xC8\x07t\x02\x02\xC8\xC9\x07k\x02\x02\xC9\xCA\x07p\x02\x02\xCA" +
		"\xCC\x07i\x02\x02\xCB\xB9\x03\x02\x02\x02\xCB\xBC\x03\x02\x02\x02\xCB" +
		"\xC1\x03\x02\x02\x02\xCB\xC5\x03\x02\x02\x02\xCC>\x03\x02\x02\x02\xCD" +
		"\xD1\t\x05\x02\x02\xCE\xD0\t\x06\x02\x02\xCF\xCE\x03\x02\x02\x02\xD0\xD3" +
		"\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2@" +
		"\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD4\xD5\x071\x02\x02\xD5\xD6" +
		"\x071\x02\x02\xD6\xDA\x03\x02\x02\x02\xD7\xD9\n\x07\x02\x02\xD8\xD7\x03" +
		"\x02\x02\x02\xD9\xDC\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03" +
		"\x02\x02\x02\xDB\xDD\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDD\xDE\b" +
		"!\x02\x02\xDEB\x03\x02\x02\x02\xDF\xE1\t\b\x02\x02\xE0\xDF\x03\x02\x02" +
		"\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02\x02" +
		"\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE5\b\"\x02\x02\xE5D\x03\x02\x02\x02" +
		"\x0F\x02\x8D\x92\x98\x9F\xA1\xA7\xA9\xB7\xCB\xD1\xDA\xE2\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PLCLexer.__ATN) {
			PLCLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(PLCLexer._serializedATN));
		}

		return PLCLexer.__ATN;
	}

}

