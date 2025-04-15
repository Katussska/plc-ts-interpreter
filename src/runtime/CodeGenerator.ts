import {AbstractParseTreeVisitor} from 'antlr4ts/tree/AbstractParseTreeVisitor';
import {PLCVisitor} from '../parser/src/grammar/PLCVisitor';
import * as PLCParser from '../parser/src/grammar/PLCParser';

/**
 * Code generator that transforms the AST into VM instructions
 */
export class CodeGenerator
    extends AbstractParseTreeVisitor<string>
    implements PLCVisitor<string>
{
    private instructions: string[] = [];
    private labelCounter: number = 0;
    private tempVarCounter: number = 0;

    defaultResult(): string {
        return '';
    }

    /**
     * Get the generated instructions as an array
     */
    getInstructions(): string[] {
        return this.instructions;
    }

    /**
     * Get the generated instructions as a string
     */
    getInstructionsAsString(): string {
        return this.instructions.join('\n');
    }

    // Visit methods for the parse tree nodes
    visitProgram(ctx: PLCParser.ProgramContext): string {
        // Visit all statements
        for (let i = 0; i < ctx.statement().length; i++) {
            this.visit(ctx.statement(i));
        }
        // Add halt instruction at the end
        this.emit('halt');
        return '';
    }

    visitStatement(ctx: PLCParser.StatementContext): string {
        if (ctx.varDeclaration()) {
            return this.visit(ctx.varDeclaration()!);
        } else if (ctx.expressionStmt()) {
            return this.visit(ctx.expressionStmt()!);
        } else if (ctx.readStmt()) {
            return this.visit(ctx.readStmt()!);
        } else if (ctx.writeStmt()) {
            return this.visit(ctx.writeStmt()!);
        } else if (ctx.block()) {
            return this.visit(ctx.block()!);
        } else if (ctx.ifStmt()) {
            return this.visit(ctx.ifStmt()!);
        } else if (ctx.whileStmt()) {
            return this.visit(ctx.whileStmt()!);
        } else if (ctx.fileStmt()) {
            return this.visit(ctx.fileStmt()!);
        }
        return '';
    }

    visitVarDeclaration(ctx: PLCParser.VarDeclarationContext): string {
        const typeText = ctx.TYPE().text;

        // Handle multiple variable declarations (ID (',' ID)*)
        for (let i = 0; i < ctx.ID().length; i++) {
            const varName = ctx.ID(i).text;
            this.emit(`declare ${typeText} ${varName}`);
        }
        return '';
    }

    visitExpressionStmt(ctx: PLCParser.ExpressionStmtContext): string {
        // Generate code for the expression
        this.visit(ctx.expression());
        // Pop the result if it's not needed
        this.emit('pop');
        return '';
    }

    visitReadStmt(ctx: PLCParser.ReadStmtContext): string {
        for (let i = 0; i < ctx.ID().length; i++) {
            const varName = ctx.ID(i).text;
            this.emit(`read ${varName}`);
        }
        return '';
    }

    visitWriteStmt(ctx: PLCParser.WriteStmtContext): string {
        for (let i = 0; i < ctx.expression().length; i++) {
            // Generate code for each expression
            this.visit(ctx.expression(i));
        }
        // Print the number of expressions
        this.emit(`print ${ctx.expression().length}`);
        return '';
    }

    visitBlock(ctx: PLCParser.BlockContext): string {
        // Visit all statements in the block
        for (let i = 0; i < ctx.statement().length; i++) {
            this.visit(ctx.statement(i));
        }
        return '';
    }

    visitIfStmt(ctx: PLCParser.IfStmtContext): string {
        const elseLabel = this.generateLabel();
        const endLabel = this.generateLabel();

        // Generate code for the condition
        this.visit(ctx.expression());

        // Jump to else branch if condition is false
        this.emit(`jz ${elseLabel}`);

        // Generate code for 'then' branch
        this.visit(ctx.statement(0));

        // Jump to end after 'then' branch
        this.emit(`jmp ${endLabel}`);

        // Mark the start of 'else' branch
        this.emit(`label ${elseLabel}`);

        // Generate code for 'else' branch if it exists
        if (ctx.statement().length > 1) {
            this.visit(ctx.statement(1));
        }

        // Mark the end of if statement
        this.emit(`label ${endLabel}`);

        return '';
    }

    visitWhileStmt(ctx: PLCParser.WhileStmtContext): string {
        const startLabel = this.generateLabel();
        const endLabel = this.generateLabel();

        // Mark the start of the loop
        this.emit(`label ${startLabel}`);

        // Generate code for the condition
        this.visit(ctx.expression());

        // Jump to end if condition is false
        this.emit(`jz ${endLabel}`);

        // Generate code for the loop body
        this.visit(ctx.statement());

        // Jump back to start
        this.emit(`jmp ${startLabel}`);

        // Mark the end of the loop
        this.emit(`label ${endLabel}`);

        return '';
    }

    visitAssignment(ctx: PLCParser.AssignmentContext): string {
        const varName = ctx.ID().text;

        // Generate code for right-hand side expression
        this.visit(ctx.expression());

        // Store value in variable
        this.emit(`store ${varName}`);

        // Also push the value on the stack for nested assignments
        this.emit(`load ${varName}`);

        return '';
    }

    visitFileOpen(ctx: PLCParser.FileOpenContext): string {
        // Generate code for the file path expression
        this.visit(ctx.expression());

        // Open the file
        this.emit('fopen');

        return '';
    }

    visitFileWrite(ctx: PLCParser.FileWriteContext): string {
        // Generate code for all values to write
        for (let i = 1; i < ctx.expression().length; i++) {
            this.visit(ctx.expression(i));
        }

        // Push the file handle onto the stack last
        this.visit(ctx.expression(0));

        // Issue fwrite instruction with count of values to write
        const writeCount = ctx.expression().length - 1;
        this.emit(`fwrite ${writeCount}`);

        return '';
    }

    visitFilePrint(ctx: PLCParser.FilePrintContext): string {
        // Generate code for all values to print
        for (let i = 1; i < ctx.expression().length; i++) {
            this.visit(ctx.expression(i));
        }

        // Push the file handle onto the stack last
        this.visit(ctx.expression(0));

        // Issue fprint instruction with count of values to print
        const printCount = ctx.expression().length - 1;
        this.emit(`fprint ${printCount}`);

        return '';
    }

    visitFileStmt(ctx: PLCParser.FileStmtContext): string {
        if (ctx.fileOpen()) {
            return this.visit(ctx.fileOpen()!);
        } else if (ctx.fileWrite()) {
            return this.visit(ctx.fileWrite()!);
        } else if (ctx.filePrint()) {
            return this.visit(ctx.filePrint()!);
        }
        return '';
    }

    visitConcat(ctx: PLCParser.ConcatContext): string {
        // Generate code for left and right expressions
        this.visit(ctx.expression(0));
        this.visit(ctx.expression(1));

        // Concatenate the strings
        this.emit('concat');

        return '';
    }

    visitMulDivMod(ctx: PLCParser.MulDivModContext): string {
        // Generate code for left and right expressions
        this.visit(ctx.expression(0));
        this.visit(ctx.expression(1));

        // Get the operation
        const op = ctx.children![1].text;

        // Emit appropriate instruction
        if (op === '*') {
            this.emit('mul');
        } else if (op === '/') {
            this.emit('div');
        } else if (op === '%') {
            this.emit('mod');
        }

        return '';
    }

    visitAddSub(ctx: PLCParser.AddSubContext): string {
        // Generate code for left and right expressions
        this.visit(ctx.expression(0));
        this.visit(ctx.expression(1));

        // Get the operation
        const op = ctx.children![1].text;

        // Emit appropriate instruction
        if (op === '+') {
            this.emit('add');
        } else if (op === '-') {
            this.emit('sub');
        }

        return '';
    }

    visitRelOp(ctx: PLCParser.RelOpContext): string {
        // Generate code for left and right expressions
        this.visit(ctx.expression(0));
        this.visit(ctx.expression(1));

        // Get the operation
        const op = ctx.children![1].text;

        // Emit appropriate instruction
        if (op === '<') {
            this.emit('lt');
        } else if (op === '>') {
            this.emit('gt');
        }

        return '';
    }

    visitEqNeq(ctx: PLCParser.EqNeqContext): string {
        // Generate code for left and right expressions
        this.visit(ctx.expression(0));
        this.visit(ctx.expression(1));

        // Get the operation
        const op = ctx.children![1].text;

        // Emit appropriate instruction
        if (op === '==') {
            this.emit('eq');
        } else if (op === '!=') {
            this.emit('neq');
        }

        return '';
    }

    visitAnd(ctx: PLCParser.AndContext): string {
        // Generate code for left and right expressions
        this.visit(ctx.expression(0));
        this.visit(ctx.expression(1));

        // Logical AND
        this.emit('and');

        return '';
    }

    visitOr(ctx: PLCParser.OrContext): string {
        // Generate code for left and right expressions
        this.visit(ctx.expression(0));
        this.visit(ctx.expression(1));

        // Logical OR
        this.emit('or');

        return '';
    }

    visitNot(ctx: PLCParser.NotContext): string {
        // Generate code for the expression
        this.visit(ctx.expression());

        // Logical NOT
        this.emit('not');

        return '';
    }

    visitUnaryMinus(ctx: PLCParser.UnaryMinusContext): string {
        // Generate code for the expression
        this.visit(ctx.expression());

        // Negate the value
        this.emit('neg');

        return '';
    }

    visitParens(ctx: PLCParser.ParensContext): string {
        // Just visit the expression inside parentheses
        return this.visit(ctx.expression());
    }

    visitLiteralExpr(ctx: PLCParser.LiteralExprContext): string {
        // Visit the literal
        return this.visit(ctx.literal());
    }

    visitVarExpr(ctx: PLCParser.VarExprContext): string {
        const varName = ctx.ID().text;

        // Load variable value onto the stack
        this.emit(`load ${varName}`);

        return '';
    }

    visitMultiAssignment(ctx: PLCParser.MultiAssignmentContext): string {
        // For each assignment in the multi-assignment
        for (let i = 0; i < ctx.ID().length; i++) {
            const varName = ctx.ID(i).text;

            // Generate code for the expression
            this.visit(ctx.expression(i));

            // Store value in variable
            this.emit(`store ${varName}`);

            // Also push the value on the stack if it's not the last assignment
            if (i < ctx.ID().length - 1) {
                this.emit(`load ${varName}`);
            }
        }

        // Leave the last value on the stack
        const lastVarName = ctx.ID(ctx.ID().length - 1).text;
        this.emit(`load ${lastVarName}`);

        return '';
    }

    visitIntLiteral(ctx: PLCParser.IntLiteralContext): string {
        const value = ctx.INT().text;
        this.emit(`push I ${value}`);
        return '';
    }

    visitFloatLiteral(ctx: PLCParser.FloatLiteralContext): string {
        const value = ctx.FLOAT().text;
        this.emit(`push F ${value}`);
        return '';
    }

    visitBoolLiteral(ctx: PLCParser.BoolLiteralContext): string {
        const value = ctx.BOOL().text;
        this.emit(`push B ${value}`);
        return '';
    }

    visitStringLiteral(ctx: PLCParser.StringLiteralContext): string {
        const value = ctx.STRING().text;
        this.emit(`push S ${value}`);
        return '';
    }

    /**
     * Add an instruction to the instruction list
     */
    private emit(instruction: string): void {
        this.instructions.push(instruction);
    }

    /**
     * Generate a unique label
     */
    private generateLabel(): string {
        return `L${this.labelCounter++}`;
    }

    /**
     * Generate a temporary variable name
     */
    private generateTempVar(): string {
        return `_t${this.tempVarCounter++}`;
    }
}