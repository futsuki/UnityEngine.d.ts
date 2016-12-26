declare namespace UnityEditor {
  class InitialModuleUI {
    // constructors
    constructor(owner: UnityEditor.ParticleSystemUI, o: UnityEditor.SerializedObject, displayName: string);
    // methods
    GetXAxisScalar(): number;
    OnInspectorGUI(s: any): void;
    UpdateCullingSupportedString(text: any): void;
    Validate(): void;
    OnSceneGUI(s: any, initial: UnityEditor.InitialModuleUI): void;
    GetParticleSystemCurveEditor(): ParticleSystemCurveEditor;
    AddToModuleCurves(curveProp: UnityEditor.SerializedProperty): void;
    GUIListOfFloatObjectToggleFields(label: any, objectProps: UnityEditor.SerializedProperty[], validator: UnityEditor.EditorGUI.ObjectFieldValidator, buttonTooltip: any, allowCreation: boolean, layoutOptions: any[]): number;
    GUIMinMaxGradient(label: any, minMaxGradient: UnityEditor.SerializedMinMaxGradient, layoutOptions: any[]): void;
    GUIMinMaxColor(label: any, minMaxColor: UnityEditor.SerializedMinMaxColor, layoutOptions: any[]): void;
    GUITripleMinMaxCurve(label: any, x: any, xCurve: UnityEditor.SerializedMinMaxCurve, y: any, yCurve: UnityEditor.SerializedMinMaxCurve, z: any, zCurve: UnityEditor.SerializedMinMaxCurve, randomizePerFrame: UnityEditor.SerializedProperty, layoutOptions: any[]): void;
    GetProperty0(name: string): UnityEditor.SerializedProperty;
    GetProperty(name: string): UnityEditor.SerializedProperty;
    GetProperty0(structName: string, propName: string): UnityEditor.SerializedProperty;
    GetProperty(structName: string, propName: string): UnityEditor.SerializedProperty;
    GetUniqueModuleName(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    visibleUI: boolean;
    foldout: boolean;
    enabled: boolean;
    readonly displayName: string;
    readonly toolTip: string;
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
    m_ParticleSystemUI: UnityEditor.ParticleSystemUI;
    m_ModuleCurves: any;
  }
}
