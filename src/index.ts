import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { PLCLexer } from './parser/src/grammar/PLCLexer';
import { PLCParser } from './parser/src/grammar/PLCParser';
import { TypeCheckerVisitor } from './typecheck/TypeChecker';

const code = `
let x: int = 5
x = x + 2
`;

const input = CharStreams.fromString(code);
const lexer = new PLCLexer(input);
const tokens = new CommonTokenStream(lexer);
const parser = new PLCParser(tokens);

const tree = parser.program();

const checker = new TypeCheckerVisitor();
checker.visit(tree);

console.log("Type checking passed!");
