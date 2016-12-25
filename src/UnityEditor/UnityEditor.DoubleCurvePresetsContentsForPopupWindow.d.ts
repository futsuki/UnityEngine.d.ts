declare namespace UnityEditor {
  class DoubleCurvePresetsContentsForPopupWindow {
    // constructors
    constructor(doubleCurveToSave: UnityEditor.DoubleCurve, presetSelectedCallback: any);
    // methods
    OnClose(): any;
    GetPresetLibraryEditor(): any;
    InitIfNeeded(): any;
    OnGUI(rect: any): any;
    GetWindowSize(): any;
    OnOpen(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    doubleCurveToSave: UnityEditor.DoubleCurve;
    readonly editorWindow: UnityEditor.EditorWindow;
    // fields
  }
}
