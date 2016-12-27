declare namespace UnityEditorInternal {
  class GenerateIconsWithMipLevels extends System.Object {
    // constructors
    constructor();
    // methods
    static GenerateAllIconsWithMipLevels(): void;
    static VerifyIconPath(assetPath: string, logError: boolean): boolean;
    static GenerateSelectedIconsWithMips(): void;
    static GenerateIconWithMipLevels(assetPath: string, mipTextures: any, fileInfo: any): void;
    static MipLevelForAssetPath(assetPath: string, separator: string): number;
    // properties
    // fields
  }
}
