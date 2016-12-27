declare namespace UnityEditor {
  class SubstanceImporter extends UnityEditor.AssetImporter {
    // constructors
    constructor();
    // methods
    GetPrototypeNames(): string[];
    GetMaterialCount(): number;
    GetMaterials(): any[];
    CloneMaterial(material: any): string;
    InstantiateMaterial(prototypeName: string): string;
    DestroyMaterial(material: any): void;
    ResetMaterial(material: any): void;
    RenameMaterial(material: any, name: string): boolean;
    OnShaderModified(material: any): void;
    GetTextureAlphaSource(material: any, textureName: string): any;
    SetTextureAlphaSource(material: any, textureName: string, alphaSource: any): void;
    GetPlatformTextureSettings(materialName: string, platform: string, maxTextureWidth: any, maxTextureHeight: any, textureFormat: any, loadBehavior: any): boolean;
    SetPlatformTextureSettings(material: any, platform: string, maxTextureWidth: number, maxTextureHeight: number, textureFormat: number, loadBehavior: number): void;
    GetMaterialOffset(material: any): any;
    SetMaterialOffset(material: any, offset: any): void;
    GetMaterialScale(material: any): any;
    SetMaterialScale(material: any, scale: any): void;
    GetGenerateAllOutputs(material: any): boolean;
    SetGenerateAllOutputs(material: any, generated: boolean): void;
    GetAnimationUpdateRate(material: any): number;
    SetAnimationUpdateRate(material: any, animation_update_rate: number): void;
    GetGenerateMipMaps(material: any): boolean;
    SetGenerateMipMaps(material: any, mode: boolean): void;
    ExportBitmaps(material: any, exportPath: string, alphaRemap: boolean): void;
    ExportPreset(material: any, exportPath: string): void;
    // properties
    // fields
  }
}
