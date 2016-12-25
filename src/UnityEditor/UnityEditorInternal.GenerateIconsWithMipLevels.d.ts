declare namespace UnityEditorInternal {
  class GenerateIconsWithMipLevels {
    // constructors
    constructor();
    // methods
    static GenerateAllIconsWithMipLevels(): any;
    static VerifyIconPath(assetPath: string, logError: boolean): boolean;
    static GenerateSelectedIconsWithMips(): any;
    static GenerateIconWithMipLevels(assetPath: string, mipTextures: any, fileInfo: any): any;
    static MipLevelForAssetPath(assetPath: string, separator: string): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
