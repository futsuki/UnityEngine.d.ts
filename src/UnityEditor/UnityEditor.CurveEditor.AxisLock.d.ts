declare namespace UnityEditor.CurveEditor {
  class AxisLock {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static None: UnityEditor.CurveEditor.AxisLock;
    static X: UnityEditor.CurveEditor.AxisLock;
    static Y: UnityEditor.CurveEditor.AxisLock;
  }
}
