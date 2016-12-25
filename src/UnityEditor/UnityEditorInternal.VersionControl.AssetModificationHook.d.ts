declare namespace UnityEditorInternal.VersionControl {
  class AssetModificationHook {
    // constructors
    constructor();
    // methods
    static OnWillMoveAsset(from: string, to: string): UnityEditor.AssetMoveResult;
    static OnWillDeleteAsset(assetPath: string, option: UnityEditor.RemoveAssetOptions): UnityEditor.AssetDeleteResult;
    static IsOpenForEdit(assetPath: string, message: any): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
