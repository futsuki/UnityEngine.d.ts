declare namespace UnityEngine {
  class ShaderVariantCollection {
    // constructors
    constructor();
    // methods
    Add(variant: UnityEngine.ShaderVariantCollection.ShaderVariant): boolean;
    Remove(variant: UnityEngine.ShaderVariantCollection.ShaderVariant): boolean;
    Contains(variant: UnityEngine.ShaderVariantCollection.ShaderVariant): boolean;
    Clear(): any;
    WarmUp(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly shaderCount: number;
    readonly variantCount: number;
    readonly isWarmedUp: boolean;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
