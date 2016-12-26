declare namespace UnityEditor {
  class SearchFilter {
    // constructors
    constructor();
    // methods
    ClearSearch(): void;
    GetState(): UnityEditor.SearchFilter.State;
    IsSearching(): boolean;
    SetNewFilter(newFilter: UnityEditor.SearchFilter): boolean;
    ToString(): string;
    static Split(text: string): string[];
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    nameFilter: string;
    classNames: string[];
    assetLabels: string[];
    versionControlStates: string[];
    assetBundleNames: string[];
    referencingInstanceIDs: number[];
    scenePaths: string[];
    showAllHits: boolean;
    folders: string[];
    searchArea: UnityEditor.SearchFilter.SearchArea;
    // fields
  }
}
