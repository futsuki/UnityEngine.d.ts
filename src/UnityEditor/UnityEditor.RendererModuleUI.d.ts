declare namespace UnityEditor {
  class RendererModuleUI extends UnityEditor.ModuleUI {
    // constructors
    constructor(owner: UnityEditor.ParticleSystemUI, o: UnityEditor.SerializedObject, displayName: string);
    // methods
    OnInspectorGUI(s: any): void;
    IsMeshEmitter(): boolean;
    // properties
    // fields
  }
}
