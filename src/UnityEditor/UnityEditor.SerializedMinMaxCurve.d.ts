declare namespace UnityEditor {
  class SerializedMinMaxCurve {
    // constructors
    constructor(m: UnityEditor.ModuleUI, displayName: any);
    constructor(m: UnityEditor.ModuleUI, displayName: any, name: string);
    constructor(m: UnityEditor.ModuleUI, displayName: any, signedRange: boolean);
    constructor(m: UnityEditor.ModuleUI, displayName: any, name: string, signedRange: boolean);
    constructor(m: UnityEditor.ModuleUI, displayName: any, name: string, signedRange: boolean, useProp0: boolean);
    // methods
    SetScalarAndNormalizedConstants(newScalar: number, totalMin: number, totalMax: number): void;
    GetAxisScalars(): any;
    SetAxisScalars(axisScalars: any): void;
    RemoveCurveFromEditor(): void;
    OnCurveAreaMouseDown(button: number, drawRect: any, curveRanges: any): boolean;
    CreateCurveData(color: any): ParticleSystemCurveEditor.CurveData;
    ToggleCurveInEditor(): void;
    GetUniqueCurveName(): string;
    SupportsProcedural(): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    state: UnityEditor.MinMaxCurveState;
    readonly signedRange: boolean;
    maxConstant: number;
    minConstant: number;
    // fields
    scalar: UnityEditor.SerializedProperty;
    maxCurve: UnityEditor.SerializedProperty;
    minCurve: UnityEditor.SerializedProperty;
    minCurveFirstKeyValue: UnityEditor.SerializedProperty;
    maxCurveFirstKeyValue: UnityEditor.SerializedProperty;
    m_Module: UnityEditor.ModuleUI;
    m_DisplayName: any;
    m_DefaultCurveScalar: number;
    m_RemapValue: number;
    m_AllowConstant: boolean;
    m_AllowRandom: boolean;
    m_AllowCurves: boolean;
    m_MaxAllowedScalar: number;
  }
}
