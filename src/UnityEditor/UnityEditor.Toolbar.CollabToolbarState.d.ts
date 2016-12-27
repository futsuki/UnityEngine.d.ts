declare namespace UnityEditor.Toolbar {
  class CollabToolbarState extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static NeedToEnableCollab: UnityEditor.Toolbar.CollabToolbarState;
    static UpToDate: UnityEditor.Toolbar.CollabToolbarState;
    static Conflict: UnityEditor.Toolbar.CollabToolbarState;
    static OperationError: UnityEditor.Toolbar.CollabToolbarState;
    static ServerHasChanges: UnityEditor.Toolbar.CollabToolbarState;
    static FilesToPush: UnityEditor.Toolbar.CollabToolbarState;
    static InProgress: UnityEditor.Toolbar.CollabToolbarState;
    static Disabled: UnityEditor.Toolbar.CollabToolbarState;
    static Offline: UnityEditor.Toolbar.CollabToolbarState;
  }
}
