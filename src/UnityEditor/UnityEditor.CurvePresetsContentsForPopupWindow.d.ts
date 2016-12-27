declare namespace UnityEditor {
  class CurvePresetsContentsForPopupWindow {
    // constructors
    constructor(animCurve: any, curveLibraryType: UnityEditor.CurveLibraryType, presetSelectedCallback: ((any) => void));
    // methods
    static GetBasePrefText(curveLibraryType: UnityEditor.CurveLibraryType): string;
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
    curveToSaveAsPreset: any;
    currentPresetLibrary: string;
    readonly editorWindow: UnityEditor.EditorWindow;
    // fields
  }
}
