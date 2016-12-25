declare namespace UnityEditor {
  class ChangeFlags {
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
    static None: UnityEditor.ChangeFlags;
    static Modified: UnityEditor.ChangeFlags;
    static Renamed: UnityEditor.ChangeFlags;
    static Moved: UnityEditor.ChangeFlags;
    static Deleted: UnityEditor.ChangeFlags;
    static Undeleted: UnityEditor.ChangeFlags;
    static Created: UnityEditor.ChangeFlags;
  }
}
