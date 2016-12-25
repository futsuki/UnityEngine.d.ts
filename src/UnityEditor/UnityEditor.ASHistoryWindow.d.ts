declare namespace UnityEditor {
  class ASHistoryWindow {
    // constructors
    constructor(parent: UnityEditor.EditorWindow);
    // methods
    FilterItems(recreateGUIItems: boolean): any;
    DoLocalSelectionChange(): any;
    OnSelectionChange(): any;
    DoGUI(hasFocus: boolean): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
