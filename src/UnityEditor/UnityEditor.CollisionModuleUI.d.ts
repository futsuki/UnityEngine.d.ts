declare namespace UnityEditor {
  class CollisionModuleUI extends UnityEditor.ModuleUI {
    // constructors
    constructor(owner: UnityEditor.ParticleSystemUI, o: UnityEditor.SerializedObject, displayName: string);
    // methods
    OnInspectorGUI(s: any): void;
    OnSceneGUI(s: any, initial: UnityEditor.InitialModuleUI): void;
    UpdateCullingSupportedString(text: any): void;
    // properties
    // fields
  }
}
