declare namespace UnityEditor.VersionControl {
  class WindowChange extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    OnDisable(): void;
    static Open(list: UnityEditor.VersionControl.AssetList, submit: boolean): void;
    static Open(change: UnityEditor.VersionControl.ChangeSet, assets: UnityEditor.VersionControl.AssetList, submit: boolean): void;
    // properties
    // fields
  }
}
