declare namespace UnityEditor {
  class UVModuleUI {
    // constructors
    constructor(owner: UnityEditor.ParticleSystemUI, o: UnityEditor.SerializedObject, displayName: string);
    // methods
    OnInspectorGUI(s: any): void;
    Validate(): void;
    GetXAxisScalar(): number;
    OnSceneGUI(s: any, initial: UnityEditor.InitialModuleUI): void;
    UpdateCullingSupportedString(text: any): void;
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
    m_ParticleSystemUI: UnityEditor.ParticleSystemUI;
    m_ModuleCurves: any;
  }
}
