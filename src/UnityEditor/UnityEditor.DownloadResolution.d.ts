declare namespace UnityEditor {
  class DownloadResolution {
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
    static Unresolved: UnityEditor.DownloadResolution;
    static SkipAsset: UnityEditor.DownloadResolution;
    static TrashMyChanges: UnityEditor.DownloadResolution;
    static TrashServerChanges: UnityEditor.DownloadResolution;
    static Merge: UnityEditor.DownloadResolution;
  }
}
