declare namespace UnityEditor.VersionControl {
  class MergeMethod {
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
    static MergeNone: UnityEditor.VersionControl.MergeMethod;
    static MergeAll: UnityEditor.VersionControl.MergeMethod;
    static MergeNonConflicting: UnityEditor.VersionControl.MergeMethod;
  }
}
