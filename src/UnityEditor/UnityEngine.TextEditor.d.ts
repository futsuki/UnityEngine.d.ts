declare namespace UnityEngine {
  class TextEditor extends System.Object {
    // constructors
    constructor();
    // methods
    OnFocus(): void;
    OnLostFocus(): void;
    HandleKeyEvent(e: any): boolean;
    DeleteLineBack(): boolean;
    DeleteWordBack(): boolean;
    DeleteWordForward(): boolean;
    Delete(): boolean;
    CanPaste(): boolean;
    Backspace(): boolean;
    SelectAll(): void;
    SelectNone(): void;
    DeleteSelection(): boolean;
    ReplaceSelection(replace: string): void;
    Insert(c: any): void;
    MoveSelectionToAltCursor(): void;
    MoveRight(): void;
    MoveLeft(): void;
    MoveUp(): void;
    MoveDown(): void;
    MoveLineStart(): void;
    MoveLineEnd(): void;
    MoveGraphicalLineStart(): void;
    MoveGraphicalLineEnd(): void;
    MoveTextStart(): void;
    MoveTextEnd(): void;
    MoveParagraphForward(): void;
    MoveParagraphBackward(): void;
    MoveCursorToPosition(cursorPosition: any): void;
    MoveAltCursorToPosition(cursorPosition: any): void;
    IsOverSelection(cursorPosition: any): boolean;
    SelectToPosition(cursorPosition: any): void;
    SelectLeft(): void;
    SelectRight(): void;
    SelectUp(): void;
    SelectDown(): void;
    SelectTextEnd(): void;
    SelectTextStart(): void;
    MouseDragSelectsWholeWords(on: boolean): void;
    DblClickSnap(snapping: any): void;
    MoveWordRight(): void;
    MoveToStartOfNextWord(): void;
    MoveToEndOfPreviousWord(): void;
    SelectToStartOfNextWord(): void;
    SelectToEndOfPreviousWord(): void;
    FindStartOfNextWord(p: number): number;
    MoveWordLeft(): void;
    SelectWordRight(): void;
    SelectWordLeft(): void;
    ExpandSelectGraphicalLineStart(): void;
    ExpandSelectGraphicalLineEnd(): void;
    SelectGraphicalLineStart(): void;
    SelectGraphicalLineEnd(): void;
    SelectParagraphForward(): void;
    SelectParagraphBackward(): void;
    SelectCurrentWord(): void;
    SelectCurrentParagraph(): void;
    UpdateScrollOffsetIfNeeded(evt: any): void;
    DrawCursor(newText: string): void;
    SaveBackup(): void;
    Undo(): void;
    Cut(): boolean;
    Copy(): void;
    Paste(): boolean;
    DetectFocusChange(): void;
    // properties
    content: any;
    text: string;
    position: any;
    cursorIndex: number;
    selectIndex: number;
    readonly hasSelection: boolean;
    readonly SelectedText: string;
    // fields
    keyboardOnScreen: any;
    controlID: number;
    style: any;
    multiline: boolean;
    hasHorizontalCursorPos: boolean;
    isPasswordField: boolean;
    scrollOffset: any;
    graphicalCursorPos: any;
    graphicalSelectCursorPos: any;
  }
}
