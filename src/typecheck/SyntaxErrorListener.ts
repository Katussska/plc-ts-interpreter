import { ANTLRErrorListener, RecognitionException, Recognizer } from 'antlr4ts';

export class SyntaxErrorListener implements ANTLRErrorListener<any> {
    public syntaxErrors: string[] = [];

    syntaxError(
        recognizer: Recognizer<any, any>,
        offendingSymbol: any,
        line: number,
        charPositionInLine: number,
        msg: string,
        e: RecognitionException | undefined
    ): void {
        this.syntaxErrors.push(`line ${line}:${charPositionInLine} ${msg}`);
    }
}
