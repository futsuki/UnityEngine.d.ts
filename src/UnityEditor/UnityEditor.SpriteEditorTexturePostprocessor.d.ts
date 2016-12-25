declare namespace UnityEditor {
  class SpriteEditorTexturePostprocessor {
    // constructors
    constructor();
    // methods
    GetPostprocessOrder(): number;
    OnPostprocessTexture(tex: any): any;
    LogWarning(warning: string): any;
    LogWarning(warning: string, context: any): any;
    LogError(warning: string): any;
    LogError(warning: string, context: any): any;
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
