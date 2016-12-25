declare namespace UnityEditor {
  class SyncVS {
    // constructors
    constructor();
    // methods
    static FindBestVisualStudio(): string;
    static ProjectExists(): boolean;
    static CreateIfDoesntExist(): any;
    static SyncVisualStudioProjectIfItAlreadyExists(): any;
    static PostprocessSyncProject(importedAssets: string[], addedAssets: string[], deletedAssets: string[], movedAssets: string[], movedFromAssetPaths: string[]): any;
    static SyncSolution(): any;
    static SyncIfFirstFileOpenSinceDomainLoad(): any;
    LogWarning(warning: string): any;
    LogWarning(warning: string, context: any): any;
    LogError(warning: string): any;
    LogError(warning: string, context: any): any;
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
