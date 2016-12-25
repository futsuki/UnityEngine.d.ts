declare namespace UnityEditor {
  class GameViewSizeMenu {
    // constructors
    constructor(itemProvider: UnityEditor.IFlexibleMenuItemProvider, selectionIndex: number, modifyItemUi: UnityEditor.FlexibleMenuModifyItemUI, gameView: UnityEditor.IGameViewSizeMenuUser);
    // methods
    GetWindowSize(): any;
    OnGUI(rect: any): any;
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
