declare namespace UnityEditor {
  class AssetStatus {
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
