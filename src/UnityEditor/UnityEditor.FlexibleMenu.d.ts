declare namespace UnityEditor {
  class FlexibleMenu {
    // constructors
    constructor(itemProvider: UnityEditor.IFlexibleMenuItemProvider, selectionIndex: number, modifyItemUi: UnityEditor.FlexibleMenuModifyItemUI, itemClickedCallback: any);
    // methods
    GetWindowSize(): any;
    OnGUI(rect: any): any;
    static DrawRect(rect: any, color: any): any;
    OnOpen(): any;
    OnClose(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    selectedIndex: number;
    readonly editorWindow: UnityEditor.EditorWindow;
    // fields
  }
}
