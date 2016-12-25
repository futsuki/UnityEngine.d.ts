declare namespace UnityEditor.ShaderUtil {
  class ShaderPropertyTexDim {
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
    static TexDimNone: UnityEditor.ShaderUtil.ShaderPropertyTexDim;
    static TexDim2D: UnityEditor.ShaderUtil.ShaderPropertyTexDim;
    static TexDim3D: UnityEditor.ShaderUtil.ShaderPropertyTexDim;
    static TexDimCUBE: UnityEditor.ShaderUtil.ShaderPropertyTexDim;
    static TexDimAny: UnityEditor.ShaderUtil.ShaderPropertyTexDim;
  }
}
