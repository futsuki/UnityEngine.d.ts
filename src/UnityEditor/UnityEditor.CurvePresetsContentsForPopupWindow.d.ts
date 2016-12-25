declare namespace UnityEditor {
  class CurvePresetsContentsForPopupWindow {
    // constructors
    constructor(animCurve: any, curveLibraryType: UnityEditor.CurveLibraryType, presetSelectedCallback: any);
    // methods
    static GetBasePrefText(curveLibraryType: UnityEditor.CurveLibraryType): string;
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
    curveToSaveAsPreset: any;
    currentPresetLibrary: string;
    readonly editorWindow: UnityEditor.EditorWindow;
    // fields
  }
}
