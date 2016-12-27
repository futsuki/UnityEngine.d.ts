declare namespace UnityEditor {
  class SyncVS extends UnityEditor.AssetPostprocessor {
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
    // properties
    // fields
  }
}
