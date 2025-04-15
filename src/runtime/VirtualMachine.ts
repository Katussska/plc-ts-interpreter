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
 * File handler for the VM (simulation)
 */
interface FileHandle {
    name: string;
    content: string[];
    position: number;
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
    private files: Map<string, FileHandle> = new Map(); // For file handling simulation

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
        this.files.clear();
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
            case "add": {
                const type = tokens[1] as ValueType;
                if (type !== 'I' && type !== 'F') throw new Error(`${instr}: invalid type ${type}`);
                binOp((a, b) => a + b, type);
                break;
            }
            case "sub": {
                const type = tokens[1] as ValueType;
                if (type !== 'I' && type !== 'F') throw new Error(`${instr}: invalid type ${type}`);
                binOp((a, b) => a - b, type);
                break;
            }
            case "mul": {
                const type = tokens[1] as ValueType;
                if (type !== 'I' && type !== 'F') throw new Error(`${instr}: invalid type ${type}`);
                binOp((a, b) => a * b, type);
                break;
            }
            case "div": {
                const type = tokens[1] as ValueType;
                if (type !== 'I' && type !== 'F') throw new Error(`${instr}: invalid type ${type}`);
                const b = this.stack.pop();
                const a = this.stack.pop();
                if (!a || !b || a.type !== type || b.type !== type) {
                    throw new Error(`${instr}: type mismatch`);
                }
                if (type === 'I') {
                    this.stack.push({ type: 'I', value: Math.floor(Number(a.value) / Number(b.value)) });
                } else {
                    this.stack.push({ type: type, value: Number(a.value) / Number(b.value) });
                }
                break;
            }
            case "mod": binOp((a, b) => a % b, 'I'); break;
            case "uminus": {
                const type = tokens[1] as ValueType;
                if (type !== 'I' && type !== 'F') throw new Error(`${instr}: invalid type ${type}`);
                unaryOp(a => -a, type);
                break;
            }
            case "concat": binOp((a, b) => a + b, 'S'); break;
            case "and": binOp((a, b) => a && b, 'B'); break;
            case "or": binOp((a, b) => a || b, 'B'); break;
            case "gt": {
                const type = tokens[1] as ValueType;
                if (type !== 'I' && type !== 'F') throw new Error(`${instr}: invalid type ${type}`);
                const b = this.stack.pop();
                const a = this.stack.pop();
                if (!a || !b || a.type !== type || b.type !== type) {
                    throw new Error(`${instr}: type mismatch`);
                }
                this.stack.push({ type: 'B', value: a.value > b.value });
                break;
            }
            case "lt": {
                const type = tokens[1] as ValueType;
                if (type !== 'I' && type !== 'F') throw new Error(`${instr}: invalid type ${type}`);
                const b = this.stack.pop();
                const a = this.stack.pop();
                if (!a || !b || a.type !== type || b.type !== type) {
                    throw new Error(`${instr}: type mismatch`);
                }
                this.stack.push({ type: 'B', value: a.value < b.value });
                break;
            }
            case "eq": {
                const type = tokens[1] as ValueType;
                if (type !== 'I' && type !== 'F' && type !== 'S') throw new Error(`${instr}: invalid type ${type}`);
                const b = this.stack.pop();
                const a = this.stack.pop();
                if (!a || !b || a.type !== type || b.type !== type) {
                    throw new Error(`${instr}: type mismatch`);
                }
                this.stack.push({ type: 'B', value: a.value === b.value });
                break;
            }
            case "neq": {
                const type = tokens[1] as ValueType;
                if (type !== 'I' && type !== 'F' && type !== 'S') throw new Error(`${instr}: invalid type ${type}`);
                const b = this.stack.pop();
                const a = this.stack.pop();
                if (!a || !b || a.type !== type || b.type !== type) {
                    throw new Error(`${instr}: type mismatch`);
                }
                this.stack.push({ type: 'B', value: a.value !== b.value });
                break;
            }
            case "not": {
                const a = this.stack.pop();
                if (!a || a.type !== 'B') {
                    throw new Error(`not: type mismatch - expected 'B', got '${a?.type || 'undefined'}'`);
                }
                this.stack.push({ type: 'B', value: !a.value });
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
                if (!cond) {
                    throw new Error("fjmp: stack is empty, expected a boolean ('B')");
                }
                if (cond.type !== 'B') {
                    throw new Error(`fjmp: type mismatch - expected 'B', got '${cond.type}'`);
                }
                if (!(cond.value as boolean)) {
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
            case "itof": {
                const a = this.stack.pop();
                if (!a || a.type !== 'I') {
                    throw new Error(`itof: type mismatch - expected 'I', got '${a?.type || 'undefined'}'`);
                }
                this.stack.push({ type: 'F', value: parseFloat(a.value.toString()) });
                break;
            }
            // New file handling instructions
            case "fopen": {
                const filename = this.stack.pop();
                if (!filename || filename.type !== 'S') {
                    throw new Error(`fopen: expected string filename on stack`);
                }

                // Simulate file opening - create a new file handle
                if (!this.files.has(filename.value as string)) {
                    this.files.set(filename.value as string, {
                        name: filename.value as string,
                        content: [],
                        position: 0
                    });
                }

                // Push file handle reference (the filename) to the stack
                this.stack.push({ type: 'S', value: filename.value });
                break;
            }
            case "fwrite": {
                // Expected stack: [filehandle, ...values to write]
                // Parse number of values to write
                const count = parseInt(tokens[1]);
                if (isNaN(count) || count < 1) {
                    throw new Error(`fwrite: invalid count ${tokens[1]}`);
                }

                // Get values to write in reverse order (they're on the stack)
                const writeValues = [];
                for (let i = 0; i < count; i++) {
                    const val = this.stack.pop();
                    if (!val) throw new Error(`fwrite: not enough values on stack`);
                    writeValues.unshift(val);
                }

                // Get file handle
                const fileHandle = this.stack.pop();
                if (!fileHandle || fileHandle.type !== 'S') {
                    throw new Error(`fwrite: expected file handle on stack`);
                }

                // Find the file
                const file = this.files.get(fileHandle.value as string);
                if (!file) {
                    throw new Error(`fwrite: file not found ${fileHandle.value}`);
                }

                // Write values to file
                for (const val of writeValues) {
                    file.content[file.position] = String(val.value);
                    file.position++;
                }
                break;
            }
            case "fprint": {
                // Parse number of values to print
                const count = parseInt(tokens[1]);
                if (isNaN(count) || count < 1) {
                    throw new Error(`fprint: invalid count ${tokens[1]}`);
                }

                // Get values to print
                const printValues = this.stack.splice(-count);

                // Get file handle (should be the item before values)
                const fileHandle = this.stack.pop();
                if (!fileHandle || fileHandle.type !== 'S') {
                    throw new Error(`fprint: expected file handle on stack`);
                }

                // Find the file
                const file = this.files.get(fileHandle.value as string);
                if (!file) {
                    throw new Error(`fprint: file not found ${fileHandle.value}`);
                }

                // Print values to file (for simulation, just add to content array)
                for (const val of printValues) {
                    file.content.push(String(val.value));
                }

                console.log(`[File ${file.name}] Printed: ${printValues.map(v => v.value).join(' ')}`);
                break;
            }
            case "halt": {
                this.running = false;
                break;
            }
            default:
                throw new Error(`Unknown instruction: ${instr}`);
        }
    }
}