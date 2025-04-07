# PLC TypeScript Interpreter

A small educational interpreter for a custom programming language, implemented in **TypeScript** using **ANTLR4**.

This project includes:

- Grammar definition (`PLC.g4`)
- ANTLR-generated parser and lexer
- A custom **TypeChecker** using the ANTLR visitor pattern
- CLI script to parse and typecheck your code

---

## 📦 Requirements

- Node.js (v18+ recommended)
- Java (for ANTLR CLI)
- ANTLR4 CLI:

```bash
npm install -g antlr4ts-cli
```

## 🚀 Running the project
1. **Clone the repository**:

```bash
git clone https://github.com/Katussska/plc-ts-interpreter.git
cd plc-ts-interpreter
```
2. **Install dependencies**:

```bash
npm install
```
3. **Generate ANTLR files**:

```bash
antlr4ts -visitor -o src/parser src/grammar/PLC.g4
```
4. **Run the typechecker**:

```bash
npm run start
```

## 📁 Project Structure
```
src/
├── grammar/         # Contains PLC.g4 grammar
├── parser/          # ANTLR-generated parser files
├── typecheck/       # TypeChecker implementation
└── index.ts         # Entry point
```

## 🛠 Features
- Variable declarations with type annotations
- Assignments with type checking
- Basic expressions with type inference
- Errors on undeclared variables or mismatched types