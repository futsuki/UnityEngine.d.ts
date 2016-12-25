declare namespace ParticleSystemCurveEditor {
  class CurveData {
    // constructors
    constructor(name: string, displayName: any, min: UnityEditor.SerializedProperty, max: UnityEditor.SerializedProperty, color: any, signedRange: boolean, getAxisScalars: UnityEditor.CurveWrapper.GetAxisScalarsCallback, setAxisScalars: UnityEditor.CurveWrapper.SetAxisScalarsCallback, visible: boolean);
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
    m_GetAxisScalarsCallback: UnityEditor.CurveWrapper.GetAxisScalarsCallback;
    m_SetAxisScalarsCallback: UnityEditor.CurveWrapper.SetAxisScalarsCallback;
    m_MaxId: number;
    m_MinId: number;
    m_Visible: boolean;
  }
}
