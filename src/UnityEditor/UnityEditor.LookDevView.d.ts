declare namespace UnityEditor {
  class LookDevView extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    static DrawFullScreenQuad(previewRect: any): void;
    CreateNewLibrary(assetPath: string): void;
    static OpenInLookDevTool(go: UnityEngine.Object): void;
    OnDestroy(): void;
    UpdateLookDevModeToggle(lookDevMode: UnityEditor.LookDevMode, value: boolean): void;
    Update(): void;
    AddItemsToMenu(menu: UnityEditor.GenericMenu): void;
    ResetView(): void;
    SaveLookDevConfig(): void;
    SaveLookDevLibrary(): boolean;
    OnEnable(): void;
    OnDisable(): void;
    HandleKeyboardShortcut(): void;
    Frame(): void;
    Frame(animate: boolean): void;
    UpdateFocus(position: any): void;
    // properties
    static readonly styles: UnityEditor.LookDevView.Styles;
    readonly hotControl: number;
    readonly config: UnityEditor.LookDevConfig;
    envLibrary: UnityEditor.LookDevEnvironmentLibrary;
    readonly userEnvLibrary: UnityEditor.LookDevEnvironmentLibrary;
    // fields
    static m_FirstViewGizmoColor: any;
    static m_SecondViewGizmoColor: any;
  }
}
