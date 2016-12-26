declare namespace UnityEditor {
  class GameViewSizeMenu {
    // constructors
    constructor(itemProvider: UnityEditor.IFlexibleMenuItemProvider, selectionIndex: number, modifyItemUi: UnityEditor.FlexibleMenuModifyItemUI, gameView: UnityEditor.IGameViewSizeMenuUser);
    // methods
    GetWindowSize(): any;
    OnGUI(rect: any): void;
    OnOpen(): void;
    OnClose(): void;
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
