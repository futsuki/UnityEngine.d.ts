declare namespace UnityEditor.Rendering {
  class ShaderQuality {
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
    static Low: UnityEditor.Rendering.ShaderQuality;
    static Medium: UnityEditor.Rendering.ShaderQuality;
    static High: UnityEditor.Rendering.ShaderQuality;
  }
}
