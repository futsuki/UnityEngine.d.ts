declare namespace UnityEditor {
  class FlexibleMenuModifyItemUI {
    // constructors
    private constructor();
    // methods
    OnClose(): void;
    Init(menuType: UnityEditor.FlexibleMenuModifyItemUI.MenuType, obj: any, acceptedCallback: any): void;
    Accepted(): void;
    IsShowing(): boolean;
    OnGUI(rect: any): void;
    GetWindowSize(): any;
    OnOpen(): void;
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
