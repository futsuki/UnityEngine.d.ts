declare namespace UnityEditor {
  class InitialModuleUI extends UnityEditor.ModuleUI {
    // constructors
    constructor(owner: UnityEditor.ParticleSystemUI, o: UnityEditor.SerializedObject, displayName: string);
    // methods
    GetXAxisScalar(): number;
    OnInspectorGUI(s: any): void;
    UpdateCullingSupportedString(text: any): void;
    // properties
    // fields
    m_LengthInSec: UnityEditor.SerializedProperty;
    m_Looping: UnityEditor.SerializedProperty;
    m_Prewarm: UnityEditor.SerializedProperty;
    m_StartDelay: UnityEditor.SerializedMinMaxCurve;
    m_PlayOnAwake: UnityEditor.SerializedProperty;
    m_SimulationSpace: UnityEditor.SerializedProperty;
    m_CustomSimulationSpace: UnityEditor.SerializedProperty;
    m_SimulationSpeed: UnityEditor.SerializedProperty;
    m_ScalingMode: UnityEditor.SerializedProperty;
    m_LifeTime: UnityEditor.SerializedMinMaxCurve;
    m_Speed: UnityEditor.SerializedMinMaxCurve;
    m_Color: UnityEditor.SerializedMinMaxGradient;
    m_Size3D: UnityEditor.SerializedProperty;
    m_SizeX: UnityEditor.SerializedMinMaxCurve;
    m_SizeY: UnityEditor.SerializedMinMaxCurve;
    m_SizeZ: UnityEditor.SerializedMinMaxCurve;
    m_Rotation3D: UnityEditor.SerializedProperty;
    m_RotationX: UnityEditor.SerializedMinMaxCurve;
    m_RotationY: UnityEditor.SerializedMinMaxCurve;
    m_RotationZ: UnityEditor.SerializedMinMaxCurve;
    m_RandomizeRotationDirection: UnityEditor.SerializedProperty;
    m_GravityModifier: UnityEditor.SerializedMinMaxCurve;
    m_MaxNumParticles: UnityEditor.SerializedProperty;
    m_AutoRandomSeed: UnityEditor.SerializedProperty;
    m_RandomSeed: UnityEditor.SerializedProperty;
  }
}
