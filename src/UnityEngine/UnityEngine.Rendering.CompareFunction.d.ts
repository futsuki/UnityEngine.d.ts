declare namespace UnityEngine.Rendering {
  class CompareFunction {
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
    static Disabled: UnityEngine.Rendering.CompareFunction;
    static Never: UnityEngine.Rendering.CompareFunction;
    static Less: UnityEngine.Rendering.CompareFunction;
    static Equal: UnityEngine.Rendering.CompareFunction;
    static LessEqual: UnityEngine.Rendering.CompareFunction;
    static Greater: UnityEngine.Rendering.CompareFunction;
    static NotEqual: UnityEngine.Rendering.CompareFunction;
    static GreaterEqual: UnityEngine.Rendering.CompareFunction;
    static Always: UnityEngine.Rendering.CompareFunction;
  }
}
