declare namespace UnityEditor {
  class UnityTypeFlags {
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
    static Abstract: UnityEditor.UnityTypeFlags;
    static Sealed: UnityEditor.UnityTypeFlags;
    static EditorOnly: UnityEditor.UnityTypeFlags;
    static Deprecated: UnityEditor.UnityTypeFlags;
  }
}
