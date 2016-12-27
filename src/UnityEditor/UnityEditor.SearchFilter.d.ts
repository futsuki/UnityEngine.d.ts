declare namespace UnityEditor {
  class SearchFilter extends System.Object {
    // constructors
    constructor();
    // methods
    ClearSearch(): void;
    GetState(): UnityEditor.SearchFilter.State;
    IsSearching(): boolean;
    SetNewFilter(newFilter: UnityEditor.SearchFilter): boolean;
    ToString(): string;
    static Split(text: string): string[];
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
