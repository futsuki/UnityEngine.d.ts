declare namespace UnityEditor {
  class AssetPostprocessor extends System.Object {
    // constructors
    constructor();
    // methods
    LogWarning(warning: string): void;
    LogWarning(warning: string, context: UnityEngine.Object): void;
    LogError(warning: string): void;
    LogError(warning: string, context: UnityEngine.Object): void;
    GetVersion(): number;
    GetPostprocessOrder(): number;
    // properties
    assetPath: string;
    readonly assetImporter: UnityEditor.AssetImporter;
    preview: any;
    // fields
  }
}
