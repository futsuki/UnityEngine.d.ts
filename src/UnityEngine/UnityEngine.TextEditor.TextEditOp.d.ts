declare namespace UnityEngine.TextEditor {
  class TextEditOp {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static MoveLeft: UnityEngine.TextEditor.TextEditOp;
    static MoveRight: UnityEngine.TextEditor.TextEditOp;
    static MoveUp: UnityEngine.TextEditor.TextEditOp;
    static MoveDown: UnityEngine.TextEditor.TextEditOp;
    static MoveLineStart: UnityEngine.TextEditor.TextEditOp;
    static MoveLineEnd: UnityEngine.TextEditor.TextEditOp;
    static MoveTextStart: UnityEngine.TextEditor.TextEditOp;
    static MoveTextEnd: UnityEngine.TextEditor.TextEditOp;
    static MovePageUp: UnityEngine.TextEditor.TextEditOp;
    static MovePageDown: UnityEngine.TextEditor.TextEditOp;
    static MoveGraphicalLineStart: UnityEngine.TextEditor.TextEditOp;
    static MoveGraphicalLineEnd: UnityEngine.TextEditor.TextEditOp;
    static MoveWordLeft: UnityEngine.TextEditor.TextEditOp;
    static MoveWordRight: UnityEngine.TextEditor.TextEditOp;
    static MoveParagraphForward: UnityEngine.TextEditor.TextEditOp;
    static MoveParagraphBackward: UnityEngine.TextEditor.TextEditOp;
    static MoveToStartOfNextWord: UnityEngine.TextEditor.TextEditOp;
    static MoveToEndOfPreviousWord: UnityEngine.TextEditor.TextEditOp;
    static SelectLeft: UnityEngine.TextEditor.TextEditOp;
    static SelectRight: UnityEngine.TextEditor.TextEditOp;
    static SelectUp: UnityEngine.TextEditor.TextEditOp;
    static SelectDown: UnityEngine.TextEditor.TextEditOp;
    static SelectTextStart: UnityEngine.TextEditor.TextEditOp;
    static SelectTextEnd: UnityEngine.TextEditor.TextEditOp;
    static SelectPageUp: UnityEngine.TextEditor.TextEditOp;
    static SelectPageDown: UnityEngine.TextEditor.TextEditOp;
    static ExpandSelectGraphicalLineStart: UnityEngine.TextEditor.TextEditOp;
    static ExpandSelectGraphicalLineEnd: UnityEngine.TextEditor.TextEditOp;
    static SelectGraphicalLineStart: UnityEngine.TextEditor.TextEditOp;
    static SelectGraphicalLineEnd: UnityEngine.TextEditor.TextEditOp;
    static SelectWordLeft: UnityEngine.TextEditor.TextEditOp;
    static SelectWordRight: UnityEngine.TextEditor.TextEditOp;
    static SelectToEndOfPreviousWord: UnityEngine.TextEditor.TextEditOp;
    static SelectToStartOfNextWord: UnityEngine.TextEditor.TextEditOp;
    static SelectParagraphBackward: UnityEngine.TextEditor.TextEditOp;
    static SelectParagraphForward: UnityEngine.TextEditor.TextEditOp;
    static Delete: UnityEngine.TextEditor.TextEditOp;
    static Backspace: UnityEngine.TextEditor.TextEditOp;
    static DeleteWordBack: UnityEngine.TextEditor.TextEditOp;
    static DeleteWordForward: UnityEngine.TextEditor.TextEditOp;
    static DeleteLineBack: UnityEngine.TextEditor.TextEditOp;
    static Cut: UnityEngine.TextEditor.TextEditOp;
    static Copy: UnityEngine.TextEditor.TextEditOp;
    static Paste: UnityEngine.TextEditor.TextEditOp;
    static SelectAll: UnityEngine.TextEditor.TextEditOp;
    static SelectNone: UnityEngine.TextEditor.TextEditOp;
    static ScrollStart: UnityEngine.TextEditor.TextEditOp;
    static ScrollEnd: UnityEngine.TextEditor.TextEditOp;
    static ScrollPageUp: UnityEngine.TextEditor.TextEditOp;
    static ScrollPageDown: UnityEngine.TextEditor.TextEditOp;
  }
}
