declare namespace UnityEditor.Web {
  class WebViewEditorWindow extends UnityEditor.EditorWindow {
    // constructors
    protected constructor();
    // methods
    AddItemsToMenu(menu: UnityEditor.GenericMenu): void;
    Reload(): void;
    About(): void;
    OnLoadError(url: string): void;
    ToggleMaximize(): void;
    Init(): void;
    OnGUI(): void;
    OnBatchMode(): void;
    Refresh(): void;
    OnFocus(): void;
    OnLostFocus(): void;
    OnEnable(): void;
    OnBecameInvisible(): void;
    OnDestroy(): void;
    OnInitScripting(): void;
    // properties
    initialOpenUrl: string;
    // fields
  }
}
