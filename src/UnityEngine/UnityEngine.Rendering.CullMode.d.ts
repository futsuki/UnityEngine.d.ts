declare namespace UnityEngine.Rendering {
  class CullMode {
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
    static Off: UnityEngine.Rendering.CullMode;
    static Front: UnityEngine.Rendering.CullMode;
    static Back: UnityEngine.Rendering.CullMode;
  }
}
