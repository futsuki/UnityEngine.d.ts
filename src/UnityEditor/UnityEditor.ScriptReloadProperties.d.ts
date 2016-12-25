declare namespace UnityEditor {
  class ScriptReloadProperties {
    // constructors
    constructor();
    // methods
    SetDirty(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    name: string;
    hideFlags: any;
    // fields
    EditorGUI_IsActuallEditing: boolean;
    EditorGUI_TextEditor_cursorIndex: number;
    EditorGUI_TextEditor_selectIndex: number;
    EditorGUI_TextEditor_controlID: number;
    EditorGUI_TextEditor_hasHorizontalCursorPos: boolean;
    EditorGUI_TextEditor_scrollOffset: any;
    EditorGUI_TextEditor_hasFocus: boolean;
    EditorGUI_TextEditor_graphicalCursorPos: any;
    EditorGUI_TextEditor_content: string;
    EditorGUI_Current_Editing_String: string;
    EditorGUI_DelayedTextEditor_cursorIndex: number;
    EditorGUI_DelayedTextEditor_selectIndex: number;
    EditorGUI_DelayedTextEditor_controlID: number;
    EditorGUI_DelayedTextEditor_hasHorizontalCursorPos: boolean;
    EditorGUI_DelayedTextEditor_scrollOffset: any;
    EditorGUI_DelayedTextEditor_hasFocus: boolean;
    EditorGUI_DelayedTextEditor_graphicalCursorPos: any;
    EditorGUI_DelayedTextEditor_content: string;
    EditorGUI_DelayedControlThatHadFocusValue: string;
  }
}
