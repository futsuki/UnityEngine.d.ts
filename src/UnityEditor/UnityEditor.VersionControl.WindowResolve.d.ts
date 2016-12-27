declare namespace UnityEditor.VersionControl {
  class WindowResolve extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    OnDisable(): void;
    static Open(change: UnityEditor.VersionControl.ChangeSet): void;
    static Open(assets: UnityEditor.VersionControl.AssetList): void;
    // properties
    // fields
  }
}
