declare namespace UnityEditor {
  class ClampVelocityModuleUI extends UnityEditor.ModuleUI {
    // constructors
    constructor(owner: UnityEditor.ParticleSystemUI, o: UnityEditor.SerializedObject, displayName: string);
    // methods
    OnInspectorGUI(s: any): void;
    UpdateCullingSupportedString(text: any): void;
    // properties
    // fields
  }
}
