declare namespace UnityEditor {
  class CurveEditorWindow extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    Show(viewToUpdate: UnityEditor.GUIView, settings: UnityEditor.CurveEditorSettings): void;
    Show(): void;
    Show(immediateDisplay: boolean): void;
    UpdateCurve(): void;
    // properties
    static readonly instance: UnityEditor.CurveEditorWindow;
    currentPresetLibrary: string;
    static curve: any;
    static color: any;
    static readonly visible: boolean;
    // fields
  }
}
