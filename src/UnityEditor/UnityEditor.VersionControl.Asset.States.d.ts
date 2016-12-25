declare namespace UnityEditor.VersionControl.Asset {
  class States {
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
    static None: UnityEditor.VersionControl.Asset.States;
    static Local: UnityEditor.VersionControl.Asset.States;
    static Synced: UnityEditor.VersionControl.Asset.States;
    static OutOfSync: UnityEditor.VersionControl.Asset.States;
    static Missing: UnityEditor.VersionControl.Asset.States;
    static CheckedOutLocal: UnityEditor.VersionControl.Asset.States;
    static CheckedOutRemote: UnityEditor.VersionControl.Asset.States;
    static DeletedLocal: UnityEditor.VersionControl.Asset.States;
    static DeletedRemote: UnityEditor.VersionControl.Asset.States;
    static AddedLocal: UnityEditor.VersionControl.Asset.States;
    static AddedRemote: UnityEditor.VersionControl.Asset.States;
    static Conflicted: UnityEditor.VersionControl.Asset.States;
    static LockedLocal: UnityEditor.VersionControl.Asset.States;
    static LockedRemote: UnityEditor.VersionControl.Asset.States;
    static Updating: UnityEditor.VersionControl.Asset.States;
    static ReadOnly: UnityEditor.VersionControl.Asset.States;
    static MetaFile: UnityEditor.VersionControl.Asset.States;
  }
}
