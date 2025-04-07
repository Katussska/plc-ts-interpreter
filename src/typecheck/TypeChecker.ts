import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { PLCVisitor } from '../parser/src/grammar/PLCVisitor';
import { ParserRuleContext } from 'antlr4ts';
import {
    AssignmentContext,
    DeclarationContext,
    ExpressionContext,
    ProgramContext,
    StatementContext,
} from '../parser/src/grammar/PLCParser';

type Type = 'int' | 'float' | 'bool';

interface VariableTable {
    [name: string]: Type;
}

export class TypeCheckerVisitor extends AbstractParseTreeVisitor<Type | void> implements PLCVisitor<Type | void> {
    private variables: VariableTable = {};

    defaultResult(): Type | void {
        return;
    }

    visitProgram(ctx: ProgramContext): void {
        for (const child of ctx.statement()) {
            this.visit(child);
        }
    }

    visitStatement(ctx: StatementContext): Type | void {
        if (ctx.assignment()) return this.visit(ctx.assignment()!);
        if (ctx.declaration()) return this.visit(ctx.declaration()!);
        // atd.
    }

    visitDeclaration(ctx: DeclarationContext): void {
        const varName = ctx.ID().text;
        const typeText = ctx.type()?.text as Type | undefined;
        const expr = ctx.expression();

        if (this.variables[varName]) {
            throw new Error(`Variable '${varName}' already declared`);
        }

        if (expr) {
            const exprType = this.visit(expr);
            if (typeText && exprType !== typeText) {
                throw new Error(`Type mismatch in declaration of '${varName}': expected ${typeText}, got ${exprType}`);
            }
            this.variables[varName] = exprType as Type;
        } else if (typeText) {
            this.variables[varName] = typeText;
        } else {
            throw new Error(`Cannot infer type for variable '${varName}'`);
        }
    }

    visitAssignment(ctx: AssignmentContext): void {
        const varName = ctx.ID().text;
        const varType = this.variables[varName];
        if (!varType) {
            throw new Error(`Variable '${varName}' not declared`);
        }

        const exprType = this.visit(ctx.expression());
        if (varType !== exprType) {
            throw new Error(`Type mismatch in assignment to '${varName}': expected ${varType}, got ${exprType}`);
        }
    }

    visitExpression(ctx: ExpressionContext): Type {
        if (ctx.INT()) return 'int';
        if (ctx.FLOAT()) return 'float';
        if (ctx.BOOL()) return 'bool';
        if (ctx.ID()) {
            const name = ctx.ID()!.text;
            const t = this.variables[name];
            if (!t) throw new Error(`Variable '${name}' not declared`);
            return t;
        }

        if (ctx.expression().length === 2) {
            const left = this.visit(ctx.expression(0));
            const right = this.visit(ctx.expression(1));
            const op = ctx._op.text;

            if (op === '+' || op === '-' || op === '*' || op === '/') {
                if ((left === 'int' || left === 'float') && left === right) {
                    return left;
                } else {
                    throw new Error(`Invalid operand types for ${op}: ${left} and ${right}`);
                }
            }
        }

        if (ctx.expression().length === 1) {
            return <"int" | "float" | "bool">this.visit(ctx.expression(0));
        }

        throw new Error("Unsupported expression");
    }
}
