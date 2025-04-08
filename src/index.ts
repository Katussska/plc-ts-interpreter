import {CharStreams, CommonTokenStream} from 'antlr4ts';
import {PLCLexer} from './parser/src/grammar/PLCLexer';
import {PLCParser} from './parser/src/grammar/PLCParser';
import {TypeChecker} from './typecheck/TypeChecker';
import {SyntaxErrorListener} from './typecheck/SyntaxErrorListener';
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
  // code = `
  //     // Valid FILE operations example
  //     FILE fileHandle;
  //     string filename;
  //     filename = "data";
  //     string extension;
  //     extension = ".txt";
  //
  //     // Test concatenation of strings for filename
  //     fileHandle = fopen filename.extension;
  //
  //     // You can also use string literals directly
  //     FILE logFile;
  //     logFile = fopen "log.txt";
  //
  //     // Other types still work as before
  //     int counter;
  //     counter = 0;
  //
  //     while (counter < 10) {
  //       counter = counter + 1;
  //       write "Counter: ", counter;
  //     }
  //
  //     bool isFileOpen;
  //     isFileOpen = true;
  //
  //     if (isFileOpen) {
  //       write "File is open";
  //     }
  //   `;
    code = `
        // Error: Cannot use FILE in arithmetic operations
        FILE badFile;
        badFile = fopen "test.txt";
        int value;
        value = badFile + 5;  // Error: Operation + cannot be performed on FILE type
        
        // Error: fopen requires string arguments
        FILE wrongFile;
        wrongFile = fopen 123;  // Error: File path in 'fopen' must be a string, got int
        
        // Error: Cannot compare FILE types
        FILE file1;
        file1 = fopen "one.txt";
        FILE file2;
        file2 = fopen "two.txt";
        if (file1 == file2) {  // Error: Invalid operand types for equality check
          write "Same file";
        }
        
        // Error: Cannot assign wrong types to FILE
        int number;
        number = 42;
        FILE invalidAssignment;
        invalidAssignment = number;  // Error: Type mismatch in assignment, expected FILE, got int
        
        // Error: Cannot use FILE in boolean conditions directly
        FILE condFile;
        condFile = fopen "condition.txt";
        if (condFile) {  // Error: If condition must be a boolean, got FILE
          write "This won't work";
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
typeChecker.printErrors();

if (typeChecker.errors.length > 0) {
  process.exit(1);
}

console.log('✅ Code is syntactically and semantically correct!');