declare namespace UnityEditor {
  class GameViewSizeMenu extends UnityEditor.FlexibleMenu {
    // constructors
    constructor(itemProvider: UnityEditor.IFlexibleMenuItemProvider, selectionIndex: number, modifyItemUi: UnityEditor.FlexibleMenuModifyItemUI, gameView: UnityEditor.IGameViewSizeMenuUser);
    // methods
    GetWindowSize(): any;
    OnGUI(rect: any): void;
    // properties
    // fields
  }
}
