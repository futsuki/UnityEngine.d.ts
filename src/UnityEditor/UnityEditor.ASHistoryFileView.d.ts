declare namespace UnityEditor {
  class ASHistoryFileView extends System.Object {
    // constructors
    constructor();
    // methods
    SelectDeletedItem(guid: string): void;
    DoRecover(): void;
    GetSelectedDeletedItemGUIDs(): string[];
    GetAllDeletedItemGUIDs(): string[];
    FilterItems(filterText: string): void;
    DoDeletedItemsGUI(parentWin: UnityEditor.ASHistoryWindow, theRect: any, s: any, offset: number, endOffset: number, focused: boolean): void;
    DoGUI(parentWin: UnityEditor.ASHistoryWindow, theRect: any, focused: boolean): void;
    GetImplicitProjectViewSelection(): string[];
    // properties
    SelType: UnityEditor.ASHistoryFileView.SelectionType;
    // fields
    m_ScrollPosition: any;
  }
}
