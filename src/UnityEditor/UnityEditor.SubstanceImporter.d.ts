declare namespace UnityEditor {
  class SubstanceImporter {
    // constructors
    constructor();
    // methods
    GetPrototypeNames(): string[];
    GetMaterialCount(): number;
    GetMaterials(): any[];
    CloneMaterial(material: any): string;
    InstantiateMaterial(prototypeName: string): string;
    DestroyMaterial(material: any): any;
    ResetMaterial(material: any): any;
    RenameMaterial(material: any, name: string): boolean;
    OnShaderModified(material: any): any;
    GetTextureAlphaSource(material: any, textureName: string): any;
    SetTextureAlphaSource(material: any, textureName: string, alphaSource: any): any;
    GetPlatformTextureSettings(materialName: string, platform: string, maxTextureWidth: any, maxTextureHeight: any, textureFormat: any, loadBehavior: any): boolean;
    SetPlatformTextureSettings(material: any, platform: string, maxTextureWidth: number, maxTextureHeight: number, textureFormat: number, loadBehavior: number): any;
    GetMaterialOffset(material: any): any;
    SetMaterialOffset(material: any, offset: any): any;
    GetMaterialScale(material: any): any;
    SetMaterialScale(material: any, scale: any): any;
    GetGenerateAllOutputs(material: any): boolean;
    SetGenerateAllOutputs(material: any, generated: boolean): any;
    GetAnimationUpdateRate(material: any): number;
    SetAnimationUpdateRate(material: any, animation_update_rate: number): any;
    GetGenerateMipMaps(material: any): boolean;
    SetGenerateMipMaps(material: any, mode: boolean): any;
    ExportBitmaps(material: any, exportPath: string, alphaRemap: boolean): any;
    ExportPreset(material: any, exportPath: string): any;
    SetAssetBundleNameAndVariant(assetBundleName: string, assetBundleVariant: string): any;
    SaveAndReimport(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly assetPath: string;
    readonly assetTimeStamp: number;
    userData: string;
    assetBundleName: string;
    assetBundleVariant: string;
    name: string;
    hideFlags: any;
    // fields
  }
}
