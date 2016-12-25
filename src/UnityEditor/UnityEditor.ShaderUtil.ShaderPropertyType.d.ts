declare namespace UnityEditor.ShaderUtil {
  class ShaderPropertyType {
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
    static Color: UnityEditor.ShaderUtil.ShaderPropertyType;
    static Vector: UnityEditor.ShaderUtil.ShaderPropertyType;
    static Float: UnityEditor.ShaderUtil.ShaderPropertyType;
    static Range: UnityEditor.ShaderUtil.ShaderPropertyType;
    static TexEnv: UnityEditor.ShaderUtil.ShaderPropertyType;
  }
}
