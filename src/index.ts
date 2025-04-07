import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { PLCLexer } from './parser/src/grammar/PLCLexer';
import { PLCParser } from './parser/src/grammar/PLCParser';
import { TypeChecker } from './typecheck/TypeChecker';
import { SyntaxErrorListener } from './typecheck/SyntaxErrorListener';
import * as fs from 'fs';
import * as path from 'path';

let code: string;

// Process input file or use fallback example code
const inputFile = process.argv[2];
if (inputFile) {
  try {
    code = fs.readFileSync(path.resolve(inputFile), 'utf-8');
    console.log(`📄 Processing file: ${inputFile}`);
  } catch (error) {
    console.error(`❌ Error reading file: ${inputFile}`);
    process.exit(1);
  }
} else {
  console.log('⚠️ No file provided. Using example PLC program.');
  code = `
        // Sample PLC program
        int x;
        x = 0;
        bool flag;
        flag = true;
        
        if (flag) {
          x = x + 1;
        } else {
          x = x - 1;
        }
        
        while (x < 10 && flag) {
          x = x + 1;
        }
        
        write "Final value of x: ", x;
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

// Parse the input
console.log('🔍 Parsing code...');
const tree = parser.program();

// Check for syntax errors
if (syntaxErrorListener.syntaxErrors.length > 0) {
  console.error('❌ Syntax Errors:');
  syntaxErrorListener.syntaxErrors.forEach(err => console.error('  ' + err));
  process.exit(1);
}

// Type checking
console.log('🔍 Checking types...');
const typeChecker = new TypeChecker();
typeChecker.visit(tree);

// Report type errors
if (typeChecker.errors.length > 0) {
  console.error('❌ Type Errors:');
  typeChecker.errors.forEach((err: string) => console.error('  ' + err));
  process.exit(1);
}

console.log('✅ Code is syntactically and semantically correct!');
