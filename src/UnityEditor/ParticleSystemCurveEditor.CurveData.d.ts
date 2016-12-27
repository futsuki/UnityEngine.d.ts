declare namespace ParticleSystemCurveEditor {
  class CurveData {
    // constructors
    constructor(name: string, displayName: any, min: UnityEditor.SerializedProperty, max: UnityEditor.SerializedProperty, color: any, signedRange: boolean, getAxisScalars: (() => any), setAxisScalars: ((any) => void), visible: boolean);
    // methods
    IsRegion(): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    m_Max: UnityEditor.SerializedProperty;
    m_Min: UnityEditor.SerializedProperty;
    m_SignedRange: boolean;
    m_Color: any;
    m_UniqueName: string;
    m_DisplayName: any;
    m_GetAxisScalarsCallback: (() => any);
    m_SetAxisScalarsCallback: ((any) => void);
    m_MaxId: number;
    m_MinId: number;
    m_Visible: boolean;
  }
}
