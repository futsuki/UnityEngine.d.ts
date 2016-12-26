declare namespace UnityEditor.VisualStudioIntegration {
  class UnityVSSupport {
    // constructors
    constructor();
    // methods
    static Initialize(): void;
    static Initialize(editorPath: string): void;
    static ShouldUnityVSBeActive(): boolean;
    static IsUnityVSEnabled(): boolean;
    static ScriptEditorChanged(editorPath: string): void;
    static GetAboutWindowLabel(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    static s_UnityVSBridgeToLoad: string;
  }
}
