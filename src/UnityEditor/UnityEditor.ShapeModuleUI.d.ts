declare namespace UnityEditor {
  class ShapeModuleUI extends UnityEditor.ModuleUI {
    // constructors
    constructor(owner: UnityEditor.ParticleSystemUI, o: UnityEditor.SerializedObject, displayName: string);
    // methods
    GetXAxisScalar(): number;
    OnInspectorGUI(s: any): void;
    OnSceneGUI(system: any, initial: UnityEditor.InitialModuleUI): void;
    // properties
    // fields
  }
}
