declare namespace UnityEditor {
  class AssetPostprocessor {
    // constructors
    constructor();
    // methods
    LogWarning(warning: string): void;
    LogWarning(warning: string, context: any): void;
    LogError(warning: string): void;
    LogError(warning: string, context: any): void;
    GetVersion(): number;
    GetPostprocessOrder(): number;
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
