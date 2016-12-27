declare namespace UnityEditor {
  class ShaderInspectorPlatformsPopup extends UnityEditor.PopupWindowContent {
    // constructors
    constructor(shader: any);
    // methods
    GetWindowSize(): any;
    OnGUI(rect: any): void;
    // properties
    static currentMode: number;
    static currentPlatformMask: number;
    static currentVariantStripping: number;
    // fields
  }
}
