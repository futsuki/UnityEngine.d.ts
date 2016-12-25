declare namespace UnityEditor.SearchFilter {
  class State {
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
    static EmptySearchFilter: UnityEditor.SearchFilter.State;
    static FolderBrowsing: UnityEditor.SearchFilter.State;
    static SearchingInAllAssets: UnityEditor.SearchFilter.State;
    static SearchingInFolders: UnityEditor.SearchFilter.State;
    static SearchingInAssetStore: UnityEditor.SearchFilter.State;
  }
}
