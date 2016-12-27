declare namespace UnityEditor {
  class AssetStatus extends System.Enum {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    value__: number;
    static Calculating: UnityEditor.AssetStatus;
    static ClientOnly: UnityEditor.AssetStatus;
    static ServerOnly: UnityEditor.AssetStatus;
    static Unchanged: UnityEditor.AssetStatus;
    static Conflict: UnityEditor.AssetStatus;
    static Same: UnityEditor.AssetStatus;
    static NewVersionAvailable: UnityEditor.AssetStatus;
    static NewLocalVersion: UnityEditor.AssetStatus;
    static RestoredFromTrash: UnityEditor.AssetStatus;
    static Ignored: UnityEditor.AssetStatus;
    static BadState: UnityEditor.AssetStatus;
  }
}
