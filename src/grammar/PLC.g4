grammar PLC;

// pravidlo pro začátek gramatiky
program : statement* EOF;

// pravidlo pro jednotlivé příkazy
statement
    : ';' | varDeclaration | expressionStmt | readStmt
    | writeStmt | block | ifStmt | whileStmt | expressionStmt ;

varDeclaration : TYPE ID (',' ID)* ';' ;
expressionStmt : expression ';' ;

readStmt : 'read' ID (',' ID)* ';' ;
writeStmt : 'write' expression (',' expression)* ';' ;

block : '{' statement* '}' ;
ifStmt : 'if' '(' expression ')' statement ('else' statement)? ;
whileStmt : 'while' '(' expression ')' statement;

expression
    : ID '=' expression                          # assignment
    | expression '.' expression                  # concat
    | expression ('*' | '/' | '%') expression    # mulDivMod
    | expression ('+' | '-') expression          # addSub
    | expression ('<' | '>') expression          # relOp
    | expression ('==' | '!=') expression        # eqNeq
    | expression '&&' expression                 # and
    | expression '||' expression                 # or
    | '!' expression                            # not
    | '-' expression                            # unaryMinus
    | '(' expression ')'                        # parens
    | literal                                   # literalExpr
    | ID                                        # varExpr
    ;

literal: INT #intLiteral | FLOAT #floatLiteral | BOOL #boolLiteral | STRING #stringLiteral;
INT: [0-9]+;
FLOAT: [0-9]+ '.' [0-9]* | '.' [0-9]+;
STRING: '"' ( ~["\\] | '\\' [\\"nrt] )* '"';
BOOL: 'true' | 'false';

TYPE: 'int' | 'float' | 'bool' | 'string';

ID: [a-zA-Z][a-zA-Z0-9]*;

COMMENT: '//' ~[\r\n]* -> skip;
WS: [ \t\r\n]+ -> skip;