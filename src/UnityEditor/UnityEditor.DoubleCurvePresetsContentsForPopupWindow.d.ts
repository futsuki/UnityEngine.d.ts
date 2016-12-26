declare namespace UnityEditor {
  class DoubleCurvePresetsContentsForPopupWindow {
    // constructors
    constructor(doubleCurveToSave: UnityEditor.DoubleCurve, presetSelectedCallback: any);
    // methods
    OnClose(): void;
    GetPresetLibraryEditor(): any;
    InitIfNeeded(): void;
    OnGUI(rect: any): void;
    GetWindowSize(): any;
    OnOpen(): void;
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
