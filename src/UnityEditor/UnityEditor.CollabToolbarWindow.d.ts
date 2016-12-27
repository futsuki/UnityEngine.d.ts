declare namespace UnityEditor {
  class CollabToolbarWindow extends UnityEditor.Web.WebViewEditorStaticWindow {
    // constructors
    constructor();
    // methods
    static CloseToolbarWindows(): void;
    static CloseToolbarWindowsImmediately(): void;
    static ShowToolbarWindow(): UnityEditor.CollabToolbarWindow;
    static ValidateShowToolbarWindow(): boolean;
    OnReceiveTitle(title: string): void;
    OnInitScripting(): void;
    OnInitScripting(): void;
    OnEnable(): void;
    OnDestroy(): void;
    OnDestroy(): void;
    OnFocus(): void;
    OnFocus(): void;
    OnLostFocus(): void;
    OnLostFocus(): void;
    // properties
    // fields
    static s_ToolbarIsVisible: boolean;
  }
}
