  class ParticleSystemCurveEditor {
    // constructors
    constructor();
    // methods
    OnDisable(): void;
    OnDestroy(): void;
    Refresh(): void;
    Init(): void;
    IsAdded(min: UnityEditor.SerializedProperty, max: UnityEditor.SerializedProperty): boolean;
    IsAdded(max: UnityEditor.SerializedProperty): boolean;
    AddCurve(curveData: ParticleSystemCurveEditor.CurveData): void;
    RemoveCurve(max: UnityEditor.SerializedProperty): void;
    RemoveCurve(min: UnityEditor.SerializedProperty, max: UnityEditor.SerializedProperty): void;
    GetCurveColor(max: UnityEditor.SerializedProperty): any;
    AddCurveDataIfNeeded(curveName: string, curveData: ParticleSystemCurveEditor.CurveData): void;
    SetVisible(curveProp: UnityEditor.SerializedProperty, visible: boolean): void;
    GetAvailableColor(): any;
    OnGUI(rect: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    static k_PresetsHeight: number;
  }
