declare namespace UnityEditor {
  class DoubleCurvePresetsContentsForPopupWindow extends UnityEditor.PopupWindowContent {
    // constructors
    constructor(doubleCurveToSave: UnityEditor.DoubleCurve, presetSelectedCallback: ((obj: UnityEditor.DoubleCurve) => void));
    // methods
    OnClose(): void;
    GetPresetLibraryEditor(): any;
    InitIfNeeded(): void;
    OnGUI(rect: any): void;
    GetWindowSize(): any;
    // properties
    doubleCurveToSave: UnityEditor.DoubleCurve;
    // fields
  }
}
