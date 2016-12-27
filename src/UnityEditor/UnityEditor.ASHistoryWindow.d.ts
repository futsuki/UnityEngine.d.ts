declare namespace UnityEditor {
  class ASHistoryWindow extends System.Object {
    // constructors
    constructor(parent: UnityEditor.EditorWindow);
    // methods
    FilterItems(recreateGUIItems: boolean): void;
    DoLocalSelectionChange(): void;
    OnSelectionChange(): void;
    DoGUI(hasFocus: boolean): boolean;
    // properties
    // fields
  }
}
