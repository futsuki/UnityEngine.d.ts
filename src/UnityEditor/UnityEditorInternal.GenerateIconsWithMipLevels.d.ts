declare namespace UnityEditorInternal {
  class GenerateIconsWithMipLevels {
    // constructors
    constructor();
    // methods
    static GenerateAllIconsWithMipLevels(): void;
    static VerifyIconPath(assetPath: string, logError: boolean): boolean;
    static GenerateSelectedIconsWithMips(): void;
    static GenerateIconWithMipLevels(assetPath: string, mipTextures: any, fileInfo: any): void;
    static MipLevelForAssetPath(assetPath: string, separator: string): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
