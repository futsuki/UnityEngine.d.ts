declare namespace UnityEditor {
  class CurvePresetsContentsForPopupWindow extends UnityEditor.PopupWindowContent {
    // constructors
    constructor(animCurve: any, curveLibraryType: UnityEditor.CurveLibraryType, presetSelectedCallback: ((obj: any) => void));
    // methods
    static GetBasePrefText(curveLibraryType: UnityEditor.CurveLibraryType): string;
    OnClose(): void;
    GetPresetLibraryEditor(): any;
    InitIfNeeded(): void;
    OnGUI(rect: any): void;
    GetWindowSize(): any;
    // properties
    curveToSaveAsPreset: any;
    currentPresetLibrary: string;
    // fields
  }
}
