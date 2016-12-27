declare namespace UnityEditor {
  class CollabHistoryWindow extends UnityEditor.Web.WebViewEditorWindowTabs {
    // constructors
    protected constructor();
    // methods
    static ShowHistoryWindow(): UnityEditor.CollabHistoryWindow;
    static ValidateShowHistoryWindow(): boolean;
    OnReceiveTitle(title: string): void;
    OnInitScripting(): void;
    OnInitScripting(): void;
    OnEnable(): void;
    OnDestroy(): void;
    OnDestroy(): void;
    OnCollabStateChanged(info: UnityEditor.Collaboration.CollabInfo): void;
    ToggleMaximize(): void;
    ToggleMaximize(): void;
    // properties
    // fields
  }
}
