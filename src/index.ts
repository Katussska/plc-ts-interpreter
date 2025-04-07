import {CharStreams, CommonTokenStream} from 'antlr4ts';
import {PLCLexer} from './parser/src/grammar/PLCLexer';
import {PLCParser} from './parser/src/grammar/PLCParser';
import {TypeChecker} from './typecheck/TypeChecker';
import {SyntaxErrorListener} from './typecheck/SyntaxErrorListener';
import * as fs from 'fs';
import * as path from 'path';

let code: string;

// Zpracování vstupního souboru nebo fallback ukázkový kód
const inputFile = process.argv[2];
if (inputFile) {
    code = fs.readFileSync(path.resolve(inputFile), 'utf-8');
} else {
    console.log('⚠️ No file provided. Using example PLC program.');
    code = `
        let x = 0;
        let flag = true;
        
        if (flag) {
          x = x + 1;
        } else {
          x = x - 1;
        }
        
        while (x < 10 && flag) {
          x = x + 1;
        }   
    `;
}

// Lexing & parsing
const inputStream = CharStreams.fromString(code);
const lexer = new PLCLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new PLCParser(tokenStream);

// Attach custom syntax error listener
const syntaxErrorListener = new SyntaxErrorListener();
parser.removeErrorListeners();
parser.addErrorListener(syntaxErrorListener);

const tree = parser.program();

if (syntaxErrorListener.syntaxErrors.length > 0) {
    console.error('❌ Syntax Errors:');
    syntaxErrorListener.syntaxErrors.forEach(err => console.error('  ' + err));
    process.exit(1);
}

// Type checking
const typeChecker = new TypeChecker();
typeChecker.visit(tree);

if (typeChecker.errors.length > 0) {
    console.error('❌ Type Errors:');
    typeChecker.errors.forEach((err: string) => console.error('  ' + err));
    process.exit(1);
}

console.log('✅ Code is syntactically and semantically correct!');
