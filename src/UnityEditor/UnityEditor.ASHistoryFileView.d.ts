declare namespace UnityEditor {
  class ASHistoryFileView {
    // constructors
    constructor();
    // methods
    SelectDeletedItem(guid: string): any;
    DoRecover(): any;
    GetSelectedDeletedItemGUIDs(): string[];
    GetAllDeletedItemGUIDs(): string[];
    FilterItems(filterText: string): any;
    DoDeletedItemsGUI(parentWin: UnityEditor.ASHistoryWindow, theRect: any, s: any, offset: number, endOffset: number, focused: boolean): any;
    DoGUI(parentWin: UnityEditor.ASHistoryWindow, theRect: any, focused: boolean): any;
    GetImplicitProjectViewSelection(): string[];
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    SelType: UnityEditor.ASHistoryFileView.SelectionType;
    // fields
    m_ScrollPosition: any;
  }
}
