declare namespace UnityEditor {
  class AvatarMaskInspector extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    OnInspectorGUI(): void;
    IsMaskEmpty(): boolean;
    IsMaskUpToDate(): boolean;
    OnBodyInspectorGUI(): void;
    OnTransformInspectorGUI(): void;
    // properties
    canImport: boolean;
    clipInfo: UnityEditor.AnimationClipInfoProperties;
    showBody: boolean;
    readonly humanTransforms: string[];
    // fields
  }
}
