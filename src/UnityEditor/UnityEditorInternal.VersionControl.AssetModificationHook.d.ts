declare namespace UnityEditorInternal.VersionControl {
  class AssetModificationHook extends System.Object {
    // constructors
    constructor();
    // methods
    static OnWillMoveAsset(from: string, to: string): UnityEditor.AssetMoveResult;
    static OnWillDeleteAsset(assetPath: string, option: UnityEditor.RemoveAssetOptions): UnityEditor.AssetDeleteResult;
    static IsOpenForEdit(assetPath: string, message: any): boolean;
    // properties
    // fields
  }
}
