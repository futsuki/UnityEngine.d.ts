declare namespace UnityEditor {
  class GameViewSizesMenuModifyItemUI {
    // constructors
    constructor();
    // methods
    OnClose(): any;
    GetWindowSize(): any;
    OnGUI(rect: any): any;
    Init(menuType: UnityEditor.FlexibleMenuModifyItemUI.MenuType, obj: any, acceptedCallback: any): any;
    Accepted(): any;
    IsShowing(): boolean;
    OnOpen(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly editorWindow: UnityEditor.EditorWindow;
    // fields
    m_Object: any;
  }
}
