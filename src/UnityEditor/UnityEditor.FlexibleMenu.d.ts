declare namespace UnityEditor {
  class FlexibleMenu extends UnityEditor.PopupWindowContent {
    // constructors
    constructor(itemProvider: UnityEditor.IFlexibleMenuItemProvider, selectionIndex: number, modifyItemUi: UnityEditor.FlexibleMenuModifyItemUI, itemClickedCallback: ((arg1: number, arg2: any) => void));
    // methods
    GetWindowSize(): any;
    OnGUI(rect: any): void;
    static DrawRect(rect: any, color: any): void;
    // properties
    selectedIndex: number;
    // fields
  }
}
