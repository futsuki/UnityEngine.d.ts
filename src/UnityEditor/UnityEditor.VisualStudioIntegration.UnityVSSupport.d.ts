declare namespace UnityEditor.VisualStudioIntegration {
  class UnityVSSupport extends System.Object {
    // constructors
    constructor();
    // methods
    static Initialize(): void;
    static Initialize(editorPath: string): void;
    static ShouldUnityVSBeActive(): boolean;
    static IsUnityVSEnabled(): boolean;
    static ScriptEditorChanged(editorPath: string): void;
    static GetAboutWindowLabel(): string;
    // properties
    // fields
    static s_UnityVSBridgeToLoad: string;
  }
}
