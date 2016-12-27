declare namespace UnityEngine {
  class TextEditor extends System.Object {
    // constructors
    constructor();
    // methods
    OnFocus(): void;
    OnLostFocus(): void;
    HandleKeyEvent(e: UnityEngine.Event): boolean;
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
    MoveCursorToPosition(cursorPosition: UnityEngine.Vector2): void;
    MoveAltCursorToPosition(cursorPosition: UnityEngine.Vector2): void;
    IsOverSelection(cursorPosition: UnityEngine.Vector2): boolean;
    SelectToPosition(cursorPosition: UnityEngine.Vector2): void;
    SelectLeft(): void;
    SelectRight(): void;
    SelectUp(): void;
    SelectDown(): void;
    SelectTextEnd(): void;
    SelectTextStart(): void;
    MouseDragSelectsWholeWords(on: boolean): void;
    DblClickSnap(snapping: UnityEngine.TextEditor.DblClickSnapping): void;
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
    UpdateScrollOffsetIfNeeded(evt: UnityEngine.Event): void;
    DrawCursor(newText: string): void;
    SaveBackup(): void;
    Undo(): void;
    Cut(): boolean;
    Copy(): void;
    Paste(): boolean;
    DetectFocusChange(): void;
    // properties
    content: UnityEngine.GUIContent;
    text: string;
    position: UnityEngine.Rect;
    cursorIndex: number;
    selectIndex: number;
    readonly hasSelection: boolean;
    readonly SelectedText: string;
    // fields
    keyboardOnScreen: UnityEngine.TouchScreenKeyboard;
    controlID: number;
    style: UnityEngine.GUIStyle;
    multiline: boolean;
    hasHorizontalCursorPos: boolean;
    isPasswordField: boolean;
    scrollOffset: UnityEngine.Vector2;
    graphicalCursorPos: UnityEngine.Vector2;
    graphicalSelectCursorPos: UnityEngine.Vector2;
  }
}
