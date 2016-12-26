declare namespace UnityEditor {
  class ModuleUI {
    // constructors
    constructor(owner: UnityEditor.ParticleSystemUI, o: UnityEditor.SerializedObject, name: string, displayName: string);
    constructor(owner: UnityEditor.ParticleSystemUI, o: UnityEditor.SerializedObject, name: string, displayName: string, initialVisibilityState: UnityEditor.ModuleUI.VisibilityState);
    // methods
    Validate(): void;
    GetXAxisScalar(): number;
    OnInspectorGUI(s: any): void;
    OnSceneGUI(s: any, initial: UnityEditor.InitialModuleUI): void;
    UpdateCullingSupportedString(text: any): void;
    GetParticleSystemCurveEditor(): ParticleSystemCurveEditor;
    AddToModuleCurves(curveProp: UnityEditor.SerializedProperty): void;
    static FloatDraggable(rect: any, floatValue: number, remap: number, dragWidth: number, formatString: string): number;
    static FloatDraggable(rect: any, floatProp: UnityEditor.SerializedProperty, remap: number, dragWidth: number, formatString: string): number;
    static GUIVector3Field(guiContent: any, vecProp: UnityEditor.SerializedProperty, layoutOptions: any[]): any;
    static GUIFloat(label: string, floatProp: UnityEditor.SerializedProperty, layoutOptions: any[]): number;
    static GUIFloat(guiContent: any, floatProp: UnityEditor.SerializedProperty, layoutOptions: any[]): number;
    static GUIFloat(guiContent: any, floatProp: UnityEditor.SerializedProperty, formatString: string, layoutOptions: any[]): number;
    static GUIFloat(guiContent: any, floatValue: number, formatString: string, layoutOptions: any[]): number;
    static GUIToggle(label: string, boolProp: UnityEditor.SerializedProperty, layoutOptions: any[]): boolean;
    static GUIToggle(guiContent: any, boolProp: UnityEditor.SerializedProperty, layoutOptions: any[]): boolean;
    static GUILayerMask(guiContent: any, boolProp: UnityEditor.SerializedProperty, layoutOptions: any[]): void;
    static GUIToggle(guiContent: any, boolValue: boolean, layoutOptions: any[]): boolean;
    static GUIToggleWithFloatField(name: string, boolProp: UnityEditor.SerializedProperty, floatProp: UnityEditor.SerializedProperty, invertToggle: boolean, layoutOptions: any[]): void;
    static GUIToggleWithFloatField(guiContent: any, boolProp: UnityEditor.SerializedProperty, floatProp: UnityEditor.SerializedProperty, invertToggle: boolean, layoutOptions: any[]): void;
    static GUIToggleWithIntField(name: string, boolProp: UnityEditor.SerializedProperty, floatProp: UnityEditor.SerializedProperty, invertToggle: boolean, layoutOptions: any[]): void;
    static GUIToggleWithIntField(guiContent: any, boolProp: UnityEditor.SerializedProperty, intProp: UnityEditor.SerializedProperty, invertToggle: boolean, layoutOptions: any[]): void;
    static GUIObject(label: any, objectProp: UnityEditor.SerializedProperty, layoutOptions: any[]): void;
    static GUIObjectFieldAndToggle(label: any, objectProp: UnityEditor.SerializedProperty, boolProp: UnityEditor.SerializedProperty, layoutOptions: any[]): void;
    GUIListOfFloatObjectToggleFields(label: any, objectProps: UnityEditor.SerializedProperty[], validator: UnityEditor.EditorGUI.ObjectFieldValidator, buttonTooltip: any, allowCreation: boolean, layoutOptions: any[]): number;
    static GUIIntDraggable(label: any, intProp: UnityEditor.SerializedProperty, layoutOptions: any[]): number;
    static GUIIntDraggable(label: any, intValue: number, layoutOptions: any[]): number;
    static GUIIntDraggableX2(mainLabel: any, label1: any, intProp1: UnityEditor.SerializedProperty, label2: any, intProp2: UnityEditor.SerializedProperty, layoutOptions: any[]): void;
    static IntDraggable(rect: any, label: any, intProp: UnityEditor.SerializedProperty, dragWidth: number): number;
    static GUIInt(guiContent: any, intValue: number, layoutOptions: any[]): number;
    static GUIInt(guiContent: any, intProp: UnityEditor.SerializedProperty, layoutOptions: any[]): number;
    static IntDraggable(rect: any, label: any, value: number, dragWidth: number): number;
    static GUIMinMaxRange(label: any, vec2Prop: UnityEditor.SerializedProperty, layoutOptions: any[]): void;
    static GUISlider(floatProp: UnityEditor.SerializedProperty, a: number, b: number, remap: number): void;
    static GUISlider(name: string, floatProp: UnityEditor.SerializedProperty, a: number, b: number, remap: number): void;
    static GUIMinMaxSlider(label: any, vec2Prop: UnityEditor.SerializedProperty, a: number, b: number, layoutOptions: any[]): void;
    static GUIBoolAsPopup(label: any, boolProp: UnityEditor.SerializedProperty, options: string[], layoutOptions: any[]): boolean;
    static GUIEnumMask(label: any, enumValue: any, layoutOptions: any[]): any;
    static GUIMask(label: any, intValue: number, options: string[], layoutOptions: any[]): number;
    static GUIPopup(name: string, intProp: UnityEditor.SerializedProperty, options: string[], layoutOptions: any[]): number;
    static GUIPopup(label: any, intProp: UnityEditor.SerializedProperty, options: string[], layoutOptions: any[]): number;
    static GUIPopup(label: any, intValue: number, options: string[], layoutOptions: any[]): number;
    static GUIMinMaxCurve(label: string, mmCurve: UnityEditor.SerializedMinMaxCurve, layoutOptions: any[]): void;
    static GUIMinMaxCurve(label: any, mmCurve: UnityEditor.SerializedMinMaxCurve, layoutOptions: any[]): void;
    GUIMinMaxGradient(label: any, minMaxGradient: UnityEditor.SerializedMinMaxGradient, layoutOptions: any[]): void;
    GUIMinMaxColor(label: any, minMaxColor: UnityEditor.SerializedMinMaxColor, layoutOptions: any[]): void;
    GUITripleMinMaxCurve(label: any, x: any, xCurve: UnityEditor.SerializedMinMaxCurve, y: any, yCurve: UnityEditor.SerializedMinMaxCurve, z: any, zCurve: UnityEditor.SerializedMinMaxCurve, randomizePerFrame: UnityEditor.SerializedProperty, layoutOptions: any[]): void;
    static GUIMMCurveStateList(rect: any, minMaxCurves: UnityEditor.SerializedMinMaxCurve): void;
    static GUIMMCurveStateList(rect: any, minMaxCurves: UnityEditor.SerializedMinMaxCurve[]): void;
    static GUIMMGradientPopUp(rect: any, gradientProp: UnityEditor.SerializedMinMaxGradient): void;
    static GUIMMColorPopUp(rect: any, boolProp: UnityEditor.SerializedProperty): void;
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
    static k_CompactFixedModuleWidth: number;
    static k_SpaceBetweenModules: number;
  }
}
