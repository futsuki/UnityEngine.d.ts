declare namespace UnityEditor.CurveWrapper {
  class SelectionMode {
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
    static None: UnityEditor.CurveWrapper.SelectionMode;
    static Selected: UnityEditor.CurveWrapper.SelectionMode;
    static SemiSelected: UnityEditor.CurveWrapper.SelectionMode;
  }
}
