declare namespace UnityEditor.SearchableEditorWindow {
  class SearchMode {
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
    static All: UnityEditor.SearchableEditorWindow.SearchMode;
    static Name: UnityEditor.SearchableEditorWindow.SearchMode;
    static Type: UnityEditor.SearchableEditorWindow.SearchMode;
    static Label: UnityEditor.SearchableEditorWindow.SearchMode;
    static AssetBundleName: UnityEditor.SearchableEditorWindow.SearchMode;
  }
}
