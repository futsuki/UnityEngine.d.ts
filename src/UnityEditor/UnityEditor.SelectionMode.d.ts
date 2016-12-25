declare namespace UnityEditor {
  class SelectionMode {
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
    static Unfiltered: UnityEditor.SelectionMode;
    static TopLevel: UnityEditor.SelectionMode;
    static Deep: UnityEditor.SelectionMode;
    static ExcludePrefab: UnityEditor.SelectionMode;
    static Editable: UnityEditor.SelectionMode;
    static Assets: UnityEditor.SelectionMode;
    static DeepAssets: UnityEditor.SelectionMode;
    static OnlyUserModifiable: UnityEditor.SelectionMode;
  }
}
