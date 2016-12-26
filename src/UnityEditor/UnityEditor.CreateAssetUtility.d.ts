declare namespace UnityEditor {
  class CreateAssetUtility {
    // constructors
    constructor();
    // methods
    Clear(): void;
    BeginNewAssetCreation(instanceID: number, newAssetEndAction: UnityEditor.ProjectWindowCallback.EndNameEditAction, filePath: string, icon: any, newAssetResourceFile: string): boolean;
    EndNewAssetCreation(name: string): void;
    IsCreatingNewAsset(): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly instanceID: number;
    readonly icon: any;
    readonly folder: string;
    readonly extension: string;
    readonly originalName: string;
    readonly endAction: UnityEditor.ProjectWindowCallback.EndNameEditAction;
    // fields
  }
}
