declare namespace UnityEditor {
  class SpriteEditorTexturePostprocessor {
    // constructors
    constructor();
    // methods
    GetPostprocessOrder(): number;
    OnPostprocessTexture(tex: any): void;
    LogWarning(warning: string): void;
    LogWarning(warning: string, context: any): void;
    LogError(warning: string): void;
    LogError(warning: string, context: any): void;
    GetVersion(): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    assetPath: string;
    readonly assetImporter: UnityEditor.AssetImporter;
    preview: any;
    // fields
  }
}
