grammar PLC;

program: statement* EOF;

statement
    : variableDeclaration
    | assignment
    | ifStatement
    | whileStatement
    | block
    ;

variableDeclaration
    : 'let' IDENTIFIER ':' type '=' expression
    ;

assignment
    : IDENTIFIER '=' expression
    ;

ifStatement
    : 'if' '(' expression ')' block ('else' block)?
    ;

whileStatement
    : 'while' '(' expression ')' block
    ;

block
    : '{' statement* '}'
    ;

expression
    : expression op=('*'|'/') expression     # MulDivExpr
    | expression op=('+'|'-') expression     # AddSubExpr
    | expression op=('=='|'!='|'<'|'>'|'<='|'>=') expression # ComparisonExpr
    | expression op=('and'|'or') expression  # LogicalExpr
    | 'not' expression                       # NotExpr
    | '(' expression ')'                     # ParenExpr
    | BOOLEAN                                # BooleanLiteral
    | INTEGER                                # IntLiteral
    | IDENTIFIER                             # IdentifierExpr
    ;

type: 'int' | 'bool';

BOOLEAN: 'true' | 'false';
INTEGER: [0-9]+;
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;

WS: [ \t\r\n]+ -> skip;
