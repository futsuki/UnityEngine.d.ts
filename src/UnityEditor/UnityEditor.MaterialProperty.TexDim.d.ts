declare namespace UnityEditor.MaterialProperty {
  class TexDim {
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
    static Unknown: UnityEditor.MaterialProperty.TexDim;
    static None: UnityEditor.MaterialProperty.TexDim;
    static Tex2D: UnityEditor.MaterialProperty.TexDim;
    static Tex3D: UnityEditor.MaterialProperty.TexDim;
    static Cube: UnityEditor.MaterialProperty.TexDim;
    static Any: UnityEditor.MaterialProperty.TexDim;
  }
}
