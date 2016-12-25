declare namespace UnityEditor {
  class HighlightSearchMode {
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
    static None: UnityEditor.HighlightSearchMode;
    static Auto: UnityEditor.HighlightSearchMode;
    static Identifier: UnityEditor.HighlightSearchMode;
    static PrefixLabel: UnityEditor.HighlightSearchMode;
    static Content: UnityEditor.HighlightSearchMode;
  }
}
