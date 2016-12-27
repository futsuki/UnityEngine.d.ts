declare namespace UnityEditor.VersionControl {
  class Provider extends System.Object {
    // constructors
    constructor();
    // methods
    static GetActivePlugin(): UnityEditor.VersionControl.Plugin;
    static GetActiveConfigFields(): UnityEditor.VersionControl.ConfigField[];
    static ChangeSets(): UnityEditor.VersionControl.Task;
    static Incoming(): UnityEditor.VersionControl.Task;
    static IsOpenForEdit(asset: UnityEditor.VersionControl.Asset): boolean;
    static UpdateSettings(): UnityEditor.VersionControl.Task;
    static GetAssetByPath(unityPath: string): UnityEditor.VersionControl.Asset;
    static GetAssetByGUID(guid: string): UnityEditor.VersionControl.Asset;
    static ClearCache(): void;
    static Status(assets: UnityEditor.VersionControl.AssetList): UnityEditor.VersionControl.Task;
    static Status(asset: UnityEditor.VersionControl.Asset): UnityEditor.VersionControl.Task;
    static Status(assets: UnityEditor.VersionControl.AssetList, recursively: boolean): UnityEditor.VersionControl.Task;
    static Status(asset: UnityEditor.VersionControl.Asset, recursively: boolean): UnityEditor.VersionControl.Task;
    static Status(assets: string[]): UnityEditor.VersionControl.Task;
    static Status(assets: string[], recursively: boolean): UnityEditor.VersionControl.Task;
    static Status(asset: string): UnityEditor.VersionControl.Task;
    static Status(asset: string, recursively: boolean): UnityEditor.VersionControl.Task;
    static Move(from: string, to: string): UnityEditor.VersionControl.Task;
    static CheckoutIsValid(assets: UnityEditor.VersionControl.AssetList): boolean;
    static CheckoutIsValid(assets: UnityEditor.VersionControl.AssetList, mode: UnityEditor.VersionControl.CheckoutMode): boolean;
    static CheckoutIsValid(asset: UnityEditor.VersionControl.Asset): boolean;
    static CheckoutIsValid(asset: UnityEditor.VersionControl.Asset, mode: UnityEditor.VersionControl.CheckoutMode): boolean;
    static Checkout(assets: UnityEditor.VersionControl.AssetList, mode: UnityEditor.VersionControl.CheckoutMode): UnityEditor.VersionControl.Task;
    static Checkout(assets: string[], mode: UnityEditor.VersionControl.CheckoutMode): UnityEditor.VersionControl.Task;
    static Checkout(assets: UnityEngine.Object[], mode: UnityEditor.VersionControl.CheckoutMode): UnityEditor.VersionControl.Task;
    static Checkout(asset: UnityEditor.VersionControl.Asset, mode: UnityEditor.VersionControl.CheckoutMode): UnityEditor.VersionControl.Task;
    static Checkout(asset: string, mode: UnityEditor.VersionControl.CheckoutMode): UnityEditor.VersionControl.Task;
    static Checkout(asset: UnityEngine.Object, mode: UnityEditor.VersionControl.CheckoutMode): UnityEditor.VersionControl.Task;
    static Delete(assetProjectPath: string): UnityEditor.VersionControl.Task;
    static Delete(assets: UnityEditor.VersionControl.AssetList): UnityEditor.VersionControl.Task;
    static Delete(asset: UnityEditor.VersionControl.Asset): UnityEditor.VersionControl.Task;
    static AddIsValid(assets: UnityEditor.VersionControl.AssetList): boolean;
    static Add(assets: UnityEditor.VersionControl.AssetList, recursive: boolean): UnityEditor.VersionControl.Task;
    static Add(asset: UnityEditor.VersionControl.Asset, recursive: boolean): UnityEditor.VersionControl.Task;
    static DeleteChangeSetsIsValid(changesets: UnityEditor.VersionControl.ChangeSets): boolean;
    static DeleteChangeSets(changesets: UnityEditor.VersionControl.ChangeSets): UnityEditor.VersionControl.Task;
    static SubmitIsValid(changeset: UnityEditor.VersionControl.ChangeSet, assets: UnityEditor.VersionControl.AssetList): boolean;
    static Submit(changeset: UnityEditor.VersionControl.ChangeSet, list: UnityEditor.VersionControl.AssetList, description: string, saveOnly: boolean): UnityEditor.VersionControl.Task;
    static DiffIsValid(assets: UnityEditor.VersionControl.AssetList): boolean;
    static DiffHead(assets: UnityEditor.VersionControl.AssetList, includingMetaFiles: boolean): UnityEditor.VersionControl.Task;
    static ResolveIsValid(assets: UnityEditor.VersionControl.AssetList): boolean;
    static Resolve(assets: UnityEditor.VersionControl.AssetList, resolveMethod: UnityEditor.VersionControl.ResolveMethod): UnityEditor.VersionControl.Task;
    static Merge(assets: UnityEditor.VersionControl.AssetList, method: UnityEditor.VersionControl.MergeMethod): UnityEditor.VersionControl.Task;
    static LockIsValid(assets: UnityEditor.VersionControl.AssetList): boolean;
    static LockIsValid(asset: UnityEditor.VersionControl.Asset): boolean;
    static UnlockIsValid(assets: UnityEditor.VersionControl.AssetList): boolean;
    static UnlockIsValid(asset: UnityEditor.VersionControl.Asset): boolean;
    static Lock(assets: UnityEditor.VersionControl.AssetList, locked: boolean): UnityEditor.VersionControl.Task;
    static Lock(asset: UnityEditor.VersionControl.Asset, locked: boolean): UnityEditor.VersionControl.Task;
    static RevertIsValid(assets: UnityEditor.VersionControl.AssetList, mode: UnityEditor.VersionControl.RevertMode): boolean;
    static RevertIsValid(asset: UnityEditor.VersionControl.Asset, mode: UnityEditor.VersionControl.RevertMode): boolean;
    static Revert(assets: UnityEditor.VersionControl.AssetList, mode: UnityEditor.VersionControl.RevertMode): UnityEditor.VersionControl.Task;
    static Revert(asset: UnityEditor.VersionControl.Asset, mode: UnityEditor.VersionControl.RevertMode): UnityEditor.VersionControl.Task;
    static GetLatestIsValid(assets: UnityEditor.VersionControl.AssetList): boolean;
    static GetLatestIsValid(asset: UnityEditor.VersionControl.Asset): boolean;
    static GetLatest(assets: UnityEditor.VersionControl.AssetList): UnityEditor.VersionControl.Task;
    static GetLatest(asset: UnityEditor.VersionControl.Asset): UnityEditor.VersionControl.Task;
    static ChangeSetDescription(changeset: UnityEditor.VersionControl.ChangeSet): UnityEditor.VersionControl.Task;
    static ChangeSetStatus(changeset: UnityEditor.VersionControl.ChangeSet): UnityEditor.VersionControl.Task;
    static ChangeSetStatus(changesetID: string): UnityEditor.VersionControl.Task;
    static IncomingChangeSetAssets(changeset: UnityEditor.VersionControl.ChangeSet): UnityEditor.VersionControl.Task;
    static IncomingChangeSetAssets(changesetID: string): UnityEditor.VersionControl.Task;
    static ChangeSetMove(assets: UnityEditor.VersionControl.AssetList, changeset: UnityEditor.VersionControl.ChangeSet): UnityEditor.VersionControl.Task;
    static ChangeSetMove(asset: UnityEditor.VersionControl.Asset, changeset: UnityEditor.VersionControl.ChangeSet): UnityEditor.VersionControl.Task;
    static ChangeSetMove(assets: UnityEditor.VersionControl.AssetList, changesetID: string): UnityEditor.VersionControl.Task;
    static ChangeSetMove(asset: UnityEditor.VersionControl.Asset, changesetID: string): UnityEditor.VersionControl.Task;
    static GetAssetListFromSelection(): UnityEditor.VersionControl.AssetList;
    // properties
    static readonly enabled: boolean;
    static readonly isActive: boolean;
    static readonly requiresNetwork: boolean;
    static readonly hasChangelistSupport: boolean;
    static readonly hasCheckoutSupport: boolean;
    static readonly isVersioningFolders: boolean;
    static readonly onlineState: UnityEditor.VersionControl.OnlineState;
    static readonly offlineReason: string;
    static readonly activeTask: UnityEditor.VersionControl.Task;
    // fields
  }
}
