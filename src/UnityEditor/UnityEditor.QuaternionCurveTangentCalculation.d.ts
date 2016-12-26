declare namespace UnityEditor {
  class QuaternionCurveTangentCalculation {
    // constructors
    private constructor();
    // methods
    GetCurve(index: number): any;
    SetCurve(index: number, curve: any): void;
    CalculateLinearTangent(fromIndex: number, toIndex: number, componentIndex: number): number;
    CalculateLinearTangent(from: any, to: any, component: number): number;
    CalculateSmoothTangent(index: number, component: number): number;
    static GetEquivalentEulerAngles(quat: any): any[];
    static GetEulerFromQuaternion(q: any, refEuler: any): any;
    static SafeDeltaDivide(dy: number, dx: number): number;
    UpdateTangentsFromMode(componentIndex: number): void;
    UpdateTangentsFromMode(index: number, componentIndex: number): void;
    static UpdateTangentsFromMode(curve: any, clip: any, curveBinding: UnityEditor.EditorCurveBinding): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
  }
}
