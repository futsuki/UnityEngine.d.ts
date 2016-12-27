declare namespace UnityEngine {
  class GUIStyle extends System.Object {
    // constructors
    constructor();
    constructor(other: UnityEngine.GUIStyle);
    // methods
    Draw(position: UnityEngine.Rect, isHover: boolean, isActive: boolean, on: boolean, hasKeyboardFocus: boolean): void;
    Draw(position: UnityEngine.Rect, text: string, isHover: boolean, isActive: boolean, on: boolean, hasKeyboardFocus: boolean): void;
    Draw(position: UnityEngine.Rect, image: UnityEngine.Texture, isHover: boolean, isActive: boolean, on: boolean, hasKeyboardFocus: boolean): void;
    Draw(position: UnityEngine.Rect, content: UnityEngine.GUIContent, isHover: boolean, isActive: boolean, on: boolean, hasKeyboardFocus: boolean): void;
    Draw(position: UnityEngine.Rect, content: UnityEngine.GUIContent, controlID: number): void;
    Draw(position: UnityEngine.Rect, content: UnityEngine.GUIContent, controlID: number, on: boolean): void;
    DrawCursor(position: UnityEngine.Rect, content: UnityEngine.GUIContent, controlID: number, Character: number): void;
    DrawWithTextSelection(position: UnityEngine.Rect, content: UnityEngine.GUIContent, controlID: number, firstSelectedCharacter: number, lastSelectedCharacter: number): void;
    GetCursorPixelPosition(position: UnityEngine.Rect, content: UnityEngine.GUIContent, cursorStringIndex: number): UnityEngine.Vector2;
    GetCursorStringIndex(position: UnityEngine.Rect, content: UnityEngine.GUIContent, cursorPixelPosition: UnityEngine.Vector2): number;
    CalcSize(content: UnityEngine.GUIContent): UnityEngine.Vector2;
    CalcScreenSize(contentSize: UnityEngine.Vector2): UnityEngine.Vector2;
    CalcHeight(content: UnityEngine.GUIContent, width: number): number;
    CalcMinMaxWidth(content: UnityEngine.GUIContent, minWidth: any, maxWidth: any): void;
    ToString(): string;
    // properties
    normal: UnityEngine.GUIStyleState;
    hover: UnityEngine.GUIStyleState;
    active: UnityEngine.GUIStyleState;
    onNormal: UnityEngine.GUIStyleState;
    onHover: UnityEngine.GUIStyleState;
    onActive: UnityEngine.GUIStyleState;
    focused: UnityEngine.GUIStyleState;
    onFocused: UnityEngine.GUIStyleState;
    border: UnityEngine.RectOffset;
    margin: UnityEngine.RectOffset;
    padding: UnityEngine.RectOffset;
    overflow: UnityEngine.RectOffset;
    clipOffset: UnityEngine.Vector2;
    font: UnityEngine.Font;
    readonly lineHeight: number;
    static readonly none: UnityEngine.GUIStyle;
    readonly isHeightDependantOnWidth: boolean;
    name: string;
    imagePosition: UnityEngine.ImagePosition;
    alignment: UnityEngine.TextAnchor;
    wordWrap: boolean;
    clipping: UnityEngine.TextClipping;
    contentOffset: UnityEngine.Vector2;
    fixedWidth: number;
    fixedHeight: number;
    stretchWidth: boolean;
    stretchHeight: boolean;
    fontSize: number;
    fontStyle: UnityEngine.FontStyle;
    richText: boolean;
    // fields
  }
}
