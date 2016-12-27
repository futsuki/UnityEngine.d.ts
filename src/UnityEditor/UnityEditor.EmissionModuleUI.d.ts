declare namespace UnityEditor {
  class EmissionModuleUI extends UnityEditor.ModuleUI {
    // constructors
    constructor(owner: UnityEditor.ParticleSystemUI, o: UnityEditor.SerializedObject, displayName: string);
    // methods
    OnInspectorGUI(s: any): void;
    UpdateCullingSupportedString(text: any): void;
    // properties
    // fields
    m_Time: UnityEditor.SerializedMinMaxCurve;
    m_Distance: UnityEditor.SerializedMinMaxCurve;
  }
}
