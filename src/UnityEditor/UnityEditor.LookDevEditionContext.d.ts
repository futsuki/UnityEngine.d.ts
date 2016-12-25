declare namespace UnityEditor {
  class LookDevEditionContext {
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
    static Left: UnityEditor.LookDevEditionContext;
    static Right: UnityEditor.LookDevEditionContext;
    static None: UnityEditor.LookDevEditionContext;
  }
}
