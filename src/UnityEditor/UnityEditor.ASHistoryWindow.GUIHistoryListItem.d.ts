declare namespace UnityEditor.ASHistoryWindow {
  class GUIHistoryListItem {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    colAuthor: any;
    colRevision: any;
    colDate: any;
    colDescription: any;
    assets: UnityEditor.ParentViewState;
    totalLineCount: number;
    boldAssets: boolean[];
    height: number;
    inFilter: boolean;
    collapsedItemCount: number;
    startShowingFrom: number;
  }
}
