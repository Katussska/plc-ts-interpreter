/**
 * The different value types that can be manipulated by the VM
 */
type ValueType = 'I' | 'F' | 'B' | 'S';

/**
 * A value in the VM with its type and actual content
 */
interface Value {
    type: ValueType;
    value: number | string | boolean;
}

/**
 * Variable information
 */
interface Variable {
    type: ValueType;
    value: any;
}

/**
 * Virtual Machine for executing PLC instructions
 */
export class VirtualMachine {
    private stack: Value[] = [];
    private variables: Map<string, Variable> = new Map();
    private instructions: string[] = [];
    private programCounter: number = 0;
    private labels: Map<string, number> = new Map();
    private running: boolean = false;
    private inputQueue: string[] = []; // For input simulation

    constructor(instructions: string[]) {
        this.instructions = instructions;
        this.preprocessLabels();
    }

    public run() {
        this.running = true;
        while (this.running && this.programCounter < this.instructions.length) {
            const line = this.instructions[this.programCounter].trim();
            this.programCounter++;
            if (!line || line.startsWith("#")) continue;
            this.executeInstruction(line);
        }
    }

    public provideInput(values: string[]) {
        this.inputQueue.push(...values);
    }

    public reset() {
        this.stack = [];
        this.variables.clear();
        this.programCounter = 0;
        this.inputQueue = [];
        this.running = false;
    }

    private preprocessLabels() {
        this.instructions.forEach((instr, idx) => {
            const [op, arg] = instr.trim().split(" ");
            if (op === "label") {
                this.labels.set(arg, idx);
            }
        });
    }

    private executeInstruction(line: string) {
        const tokens = line.match(/(?:\".*?\"|[^\s]+)/g) || [];
        const instr = tokens[0];

        const binOp = (fn: (a: any, b: any) => any, expectedType: ValueType) => {
            const b = this.stack.pop();
            const a = this.stack.pop();
            if (!a || !b || a.type !== expectedType || b.type !== expectedType) throw new Error(`${instr}: type mismatch`);
            this.stack.push({ type: expectedType, value: fn(a.value, b.value) });
        };

        const unaryOp = (fn: (a: any) => any, expectedType: ValueType) => {
            const a = this.stack.pop();
            if (!a || a.type !== expectedType) throw new Error(`${instr}: type mismatch`);
            this.stack.push({ type: expectedType, value: fn(a.value) });
        };

        switch (instr) {
            case "push": {
                const [_, type, ...rest] = tokens;
                const raw = rest.join(" ");
                let value: any;
                switch (type) {
                    case "I": value = parseInt(raw); break;
                    case "F": value = parseFloat(raw); break;
                    case "B": value = raw === "true"; break;
                    case "S": value = raw.slice(1, -1); break; // remove quotes
                    default: throw new Error(`Invalid type in push: ${type}`);
                }
                this.stack.push({ type, value });
                break;
            }
            case "pop": this.stack.pop(); break;
            case "add": binOp((a, b) => a + b, tokens[1] as ValueType); break;
            case "sub": binOp((a, b) => a - b, tokens[1] as ValueType); break;
            case "mul": binOp((a, b) => a * b, tokens[1] as ValueType); break;
            case "div": binOp((a, b) => a / b, tokens[1] as ValueType); break;
            case "mod": binOp((a, b) => a % b, 'I'); break;
            case "uminus": unaryOp(a => -a, tokens[1] as ValueType); break;
            case "concat": binOp((a, b) => a + b, 'S'); break;
            case "and": binOp((a, b) => a && b, 'B'); break;
            case "or": binOp((a, b) => a || b, 'B'); break;
            case "gt": binOp((a, b) => a > b, tokens[1] as ValueType); break;
            case "lt": binOp((a, b) => a < b, tokens[1] as ValueType); break;
            case "eq": binOp((a, b) => a === b, tokens[1] as ValueType); break;
            case "not": unaryOp(a => !a, 'B'); break;
            case "itof": {
                const val = this.stack.pop();
                if (!val || val.type !== 'I') throw new Error("itof: not an int");
                this.stack.push({ type: 'F', value: parseFloat(val.value.toString()) });
                break;
            }
            case "load": {
                const varName = tokens[1];
                const variable = this.variables.get(varName);
                if (!variable) throw new Error(`load: undefined variable ${varName}`);
                this.stack.push({ type: variable.type, value: variable.value });
                break;
            }
            case "save": {
                const varName = tokens[1];
                const val = this.stack.pop();
                if (!val) throw new Error("save: stack empty");
                this.variables.set(varName, { type: val.type, value: val.value });
                break;
            }
            case "jmp": {
                const label = tokens[1];
                const addr = this.labels.get(label);
                if (addr === undefined) throw new Error(`jmp: unknown label ${label}`);
                this.programCounter = addr;
                break;
            }
            case "fjmp": {
                const label = tokens[1];
                const cond = this.stack.pop();
                if (!cond || cond.type !== 'B') throw new Error("fjmp: not a bool");
                if (!cond.value) {
                    const addr = this.labels.get(label);
                    if (addr === undefined) throw new Error(`fjmp: unknown label ${label}`);
                    this.programCounter = addr;
                }
                break;
            }
            case "label": break; // already handled
            case "print": {
                const count = parseInt(tokens[1]);
                const vals = this.stack.splice(-count);
                console.log(...vals.map(v => v.value));
                break;
            }
            case "read": {
                const type = tokens[1] as ValueType;
                const raw = this.inputQueue.shift();
                if (raw === undefined) throw new Error("read: no input");
                let val: any;
                switch (type) {
                    case "I": val = parseInt(raw); break;
                    case "F": val = parseFloat(raw); break;
                    case "B": val = raw === "true"; break;
                    case "S": val = raw; break;
                    default: throw new Error(`Invalid type in read: ${type}`);
                }
                this.stack.push({ type, value: val });
                break;
            }
            default:
                throw new Error(`Unknown instruction: ${instr}`);
        }
    }
}
