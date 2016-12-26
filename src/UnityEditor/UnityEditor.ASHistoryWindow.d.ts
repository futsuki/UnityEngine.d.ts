declare namespace UnityEditor {
  class ASHistoryWindow {
    // constructors
    constructor(parent: UnityEditor.EditorWindow);
    // methods
    FilterItems(recreateGUIItems: boolean): void;
    DoLocalSelectionChange(): void;
    OnSelectionChange(): void;
    DoGUI(hasFocus: boolean): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
