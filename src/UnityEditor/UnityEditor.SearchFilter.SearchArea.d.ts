declare namespace UnityEditor.SearchFilter {
  class SearchArea {
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
    static AllAssets: UnityEditor.SearchFilter.SearchArea;
    static SelectedFolders: UnityEditor.SearchFilter.SearchArea;
    static AssetStore: UnityEditor.SearchFilter.SearchArea;
  }
}
