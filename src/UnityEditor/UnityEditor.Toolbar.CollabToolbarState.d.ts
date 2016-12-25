declare namespace UnityEditor.Toolbar {
  class CollabToolbarState {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
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
