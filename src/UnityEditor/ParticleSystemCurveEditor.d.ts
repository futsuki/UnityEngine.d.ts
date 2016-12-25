  class ParticleSystemCurveEditor {
    // constructors
    constructor();
    // methods
    OnDisable(): any;
    OnDestroy(): any;
    Refresh(): any;
    Init(): any;
    IsAdded(min: UnityEditor.SerializedProperty, max: UnityEditor.SerializedProperty): boolean;
    IsAdded(max: UnityEditor.SerializedProperty): boolean;
    AddCurve(curveData: ParticleSystemCurveEditor.CurveData): any;
    RemoveCurve(max: UnityEditor.SerializedProperty): any;
    RemoveCurve(min: UnityEditor.SerializedProperty, max: UnityEditor.SerializedProperty): any;
    GetCurveColor(max: UnityEditor.SerializedProperty): any;
    AddCurveDataIfNeeded(curveName: string, curveData: ParticleSystemCurveEditor.CurveData): any;
    SetVisible(curveProp: UnityEditor.SerializedProperty, visible: boolean): any;
    GetAvailableColor(): any;
    OnGUI(rect: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    static k_PresetsHeight: number;
  }
