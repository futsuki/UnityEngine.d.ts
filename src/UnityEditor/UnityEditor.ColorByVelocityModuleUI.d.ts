declare namespace UnityEditor {
  class ColorByVelocityModuleUI {
    // constructors
    constructor(owner: UnityEditor.ParticleSystemUI, o: UnityEditor.SerializedObject, displayName: string);
    // methods
    OnInspectorGUI(s: any): any;
    Validate(): any;
    GetXAxisScalar(): number;
    OnSceneGUI(s: any, initial: UnityEditor.InitialModuleUI): any;
    UpdateCullingSupportedString(text: any): any;
    GetParticleSystemCurveEditor(): ParticleSystemCurveEditor;
    AddToModuleCurves(curveProp: UnityEditor.SerializedProperty): any;
    GUIListOfFloatObjectToggleFields(label: any, objectProps: UnityEditor.SerializedProperty[], validator: UnityEditor.EditorGUI.ObjectFieldValidator, buttonTooltip: any, allowCreation: boolean, layoutOptions: any[]): number;
    GUIMinMaxGradient(label: any, minMaxGradient: UnityEditor.SerializedMinMaxGradient, layoutOptions: any[]): any;
    GUIMinMaxColor(label: any, minMaxColor: UnityEditor.SerializedMinMaxColor, layoutOptions: any[]): any;
    GUITripleMinMaxCurve(label: any, x: any, xCurve: UnityEditor.SerializedMinMaxCurve, y: any, yCurve: UnityEditor.SerializedMinMaxCurve, z: any, zCurve: UnityEditor.SerializedMinMaxCurve, randomizePerFrame: UnityEditor.SerializedProperty, layoutOptions: any[]): any;
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
