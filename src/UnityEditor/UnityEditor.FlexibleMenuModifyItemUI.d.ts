declare namespace UnityEditor {
  class FlexibleMenuModifyItemUI extends UnityEditor.PopupWindowContent {
    // constructors
    protected constructor();
    // methods
    OnClose(): void;
    Init(menuType: UnityEditor.FlexibleMenuModifyItemUI.MenuType, obj: any, acceptedCallback: ((obj: any) => void)): void;
    Accepted(): void;
    IsShowing(): boolean;
    // properties
    // fields
    m_Object: any;
  }
}
