declare namespace UnityEngine.ShaderVariantCollection {
  class ShaderVariant {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    shader: UnityEngine.Shader;
    passType: UnityEngine.Rendering.PassType;
    keywords: string[];
  }
}
