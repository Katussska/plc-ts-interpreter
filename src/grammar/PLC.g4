grammar PLC;

program: (statement NEWLINE)* EOF;

statement
    : assignment
    | declaration
    | functionCall
    | ifStatement
    | whileStatement
    ;

assignment
    : ID '=' expression
    ;

declaration
    : 'let' ID (':' type)? ('=' expression)?
    ;

functionCall
    : ID '(' (expression (',' expression)*)? ')'
    ;

ifStatement
    : 'if' expression 'then' NEWLINE (statement NEWLINE)* ('else' NEWLINE (statement NEWLINE)*)? 'end'
    ;

whileStatement
    : 'while' expression 'do' NEWLINE (statement NEWLINE)* 'end'
    ;

expression
    : expression op=('*'|'/') expression
    | expression op=('+'|'-') expression
    | '(' expression ')'
    | INT
    | FLOAT
    | BOOL
    | ID
    ;

type
    : 'int' | 'float' | 'bool'
    ;

// Tokens

ID: [a-zA-Z_][a-zA-Z0-9_]*;
INT: [0-9]+;
FLOAT: [0-9]+'.'[0-9]+;
BOOL: 'true' | 'false';

WS: [ \t]+ -> skip;
NEWLINE: ('\r'? '\n')+;
COMMENT: '#' ~[\r\n]* -> skip;
