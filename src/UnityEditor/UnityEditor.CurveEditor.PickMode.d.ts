declare namespace UnityEditor.CurveEditor {
  class PickMode {
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
    static None: UnityEditor.CurveEditor.PickMode;
    static Click: UnityEditor.CurveEditor.PickMode;
    static Marquee: UnityEditor.CurveEditor.PickMode;
  }
}
