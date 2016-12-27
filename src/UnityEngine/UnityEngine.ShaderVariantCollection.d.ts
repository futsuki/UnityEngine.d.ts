declare namespace UnityEngine {
  class ShaderVariantCollection extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    Add(variant: UnityEngine.ShaderVariantCollection.ShaderVariant): boolean;
    Remove(variant: UnityEngine.ShaderVariantCollection.ShaderVariant): boolean;
    Contains(variant: UnityEngine.ShaderVariantCollection.ShaderVariant): boolean;
    Clear(): void;
    WarmUp(): void;
    // properties
    readonly shaderCount: number;
    readonly variantCount: number;
    readonly isWarmedUp: boolean;
    // fields
  }
}
