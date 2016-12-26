declare namespace UnityEditor {
  class SyncVS {
    // constructors
    constructor();
    // methods
    static FindBestVisualStudio(): string;
    static ProjectExists(): boolean;
    static CreateIfDoesntExist(): void;
    static SyncVisualStudioProjectIfItAlreadyExists(): void;
    static PostprocessSyncProject(importedAssets: string[], addedAssets: string[], deletedAssets: string[], movedAssets: string[], movedFromAssetPaths: string[]): void;
    static SyncSolution(): void;
    static SyncIfFirstFileOpenSinceDomainLoad(): void;
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
