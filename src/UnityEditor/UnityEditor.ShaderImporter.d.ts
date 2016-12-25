declare namespace UnityEditor {
  class ShaderImporter {
    // constructors
    constructor();
    // methods
    GetShader(): any;
    SetDefaultTextures(name: string[], textures: any[]): any;
    GetDefaultTexture(name: string): any;
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
