grammar PLC;

// pravidlo pro začátek gramatiky
program : statement* EOF;

// pravidlo pro jednotlivé příkazy
statement
    : varDeclaration
    | expressionStmt
    | readStmt
    | writeStmt
    | block
    | ifStmt
    | whileStmt
    ;

// Deklarace proměnných musí být ukončena středníkem
varDeclaration : TYPE ID (',' ID)* ';' ;

// Výraz musí být ukončen středníkem
expressionStmt : expression ';' ;

// Čtení musí být ukončeno středníkem
readStmt : 'read' ID (',' ID)* ';' ;

// Zápis musí být ukončen středníkem
writeStmt : 'write' expression (',' expression)* ';' ;

// Blok může obsahovat více příkazů
block : '{' statement* '}' ;

// Podmínka může mít volitelnou větev `else`
ifStmt : 'if' '(' expression ')' statement ('else' statement)? ;

// Cyklus `while` musí obsahovat podmínku a tělo
whileStmt : 'while' '(' expression ')' statement;

// Výrazy
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

// Literály
literal: INT #intLiteral | FLOAT #floatLiteral | BOOL #boolLiteral | STRING #stringLiteral;
INT: [0-9]+;
FLOAT: [0-9]+ '.' [0-9]* | '.' [0-9]+;
STRING: '"' ( ~["\\] | '\\' [\\"nrt] )* '"';
BOOL: 'true' | 'false';

// Typy
TYPE: 'int' | 'float' | 'bool' | 'string';

// Identifikátory
ID: [a-zA-Z][a-zA-Z0-9]*;

// Komentáře a mezery
COMMENT: '//' ~[\r\n]* -> skip;
WS: [ \t\r\n]+ -> skip;