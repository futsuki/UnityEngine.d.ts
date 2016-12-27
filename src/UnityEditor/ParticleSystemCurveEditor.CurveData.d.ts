declare namespace ParticleSystemCurveEditor {
  class CurveData extends System.Object {
    // constructors
    constructor(name: string, displayName: any, min: UnityEditor.SerializedProperty, max: UnityEditor.SerializedProperty, color: any, signedRange: boolean, getAxisScalars: (() => any), setAxisScalars: ((newAxisScalars: any) => void), visible: boolean);
    // methods
    IsRegion(): boolean;
    // properties
    // fields
    m_Max: UnityEditor.SerializedProperty;
    m_Min: UnityEditor.SerializedProperty;
    m_SignedRange: boolean;
    m_Color: any;
    m_UniqueName: string;
    m_DisplayName: any;
    m_GetAxisScalarsCallback: (() => any);
    m_SetAxisScalarsCallback: ((newAxisScalars: any) => void);
    m_MaxId: number;
    m_MinId: number;
    m_Visible: boolean;
  }
}
