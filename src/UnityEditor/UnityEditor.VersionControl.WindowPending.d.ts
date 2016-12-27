declare namespace UnityEditor.VersionControl {
  class WindowPending extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    OnSelectionChange(): void;
    static ExpandLatestChangeSet(): void;
    static OnStatusUpdated(): void;
    static UpdateAllWindows(): void;
    static CloseAllWindows(): void;
    // properties
    // fields
  }
}
