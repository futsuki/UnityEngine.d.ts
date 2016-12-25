declare namespace UnityEditor.ProjectBrowser {
  class SearchViewState {
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
    static NotSearching: UnityEditor.ProjectBrowser.SearchViewState;
    static AllAssets: UnityEditor.ProjectBrowser.SearchViewState;
    static SubFolders: UnityEditor.ProjectBrowser.SearchViewState;
    static AssetStore: UnityEditor.ProjectBrowser.SearchViewState;
  }
}
