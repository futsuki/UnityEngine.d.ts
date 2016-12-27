declare namespace UnityEditor.VersionControl {
  class WindowRevert extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    static Open(change: UnityEditor.VersionControl.ChangeSet): void;
    static Open(assets: UnityEditor.VersionControl.AssetList): void;
    // properties
    // fields
  }
}
