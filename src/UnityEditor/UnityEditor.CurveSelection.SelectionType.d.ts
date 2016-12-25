declare namespace UnityEditor.CurveSelection {
  class SelectionType {
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
    static Key: UnityEditor.CurveSelection.SelectionType;
    static InTangent: UnityEditor.CurveSelection.SelectionType;
    static OutTangent: UnityEditor.CurveSelection.SelectionType;
    static Count: UnityEditor.CurveSelection.SelectionType;
  }
}
