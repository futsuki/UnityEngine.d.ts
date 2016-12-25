declare namespace UnityEditor.VisualStudioIntegration {
  class UnityVSSupport {
    // constructors
    constructor();
    // methods
    static Initialize(): any;
    static Initialize(editorPath: string): any;
    static ShouldUnityVSBeActive(): boolean;
    static IsUnityVSEnabled(): boolean;
    static ScriptEditorChanged(editorPath: string): any;
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
