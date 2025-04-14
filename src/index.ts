import * as fs from 'fs';
import * as path from 'path';

let code: string;

// Process input file or use fallback example code
const inputFile = process.argv[2];
if (inputFile) {
  try {
    code = fs.readFileSync(path.resolve(inputFile), 'utf-8');
    console.log('🔎 Resolved path:', path.resolve(inputFile));
    console.log(`📄 Processing file: ${inputFile}`);

    // VM Mode – files starting with 'code' are treated as instruction sequences
    if (path.basename(inputFile).startsWith('code')) {
      console.log('🧠 Running PLC Virtual Machine (Instruction Mode)...');
      const instructions = code
          .split('\n')
          .map(line => line.trim())
          .filter(line => line.length > 0 && !line.startsWith('//'));

      const { VirtualMachine } = require('./runtime/VirtualMachine'); // adjust path if needed
      const vm = new VirtualMachine(instructions);

      // Simulated input for read operations
      vm.provideInput([
        '42',         // a - int
        '3.14',       // b - float
        'Hello PLC',  // c - string
        'true'        // e - bool
      ]);

      vm.run();
        console.log('✅ Execution completed successfully!');
      process.exit(0);
    }
  } catch (error) {
    // console.error(`❌ Error reading file: ${inputFile}`);
    console.error(error);
    process.exit(1);
  }
}

/*

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
*/
