declare namespace UnityEditor {
  class ShaderInspectorPlatformsPopup {
    // constructors
    constructor(shader: any);
    // methods
    GetWindowSize(): any;
    OnGUI(rect: any): any;
    OnOpen(): any;
    OnClose(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static currentMode: number;
    static currentPlatformMask: number;
    static currentVariantStripping: number;
    readonly editorWindow: UnityEditor.EditorWindow;
    // fields
  }
}
