declare namespace UnityEditor.Connect {
  class UnityConnectEditorWindow extends UnityEditor.Web.WebViewEditorWindowTabs {
    // constructors
    protected constructor();
    // methods
    static Create(title: string, serviceUrls: string[]): UnityEditor.Connect.UnityConnectEditorWindow;
    UrlsMatch(referenceUrls: string[]): boolean;
    OnEnable(): void;
    OnEnable(): void;
    OnInitScripting(): void;
    OnInitScripting(): void;
    ToggleMaximize(): void;
    ToggleMaximize(): void;
    OnLoadError(url: string): void;
    OnLoadError(url: string): void;
    OnGUI(): void;
    OnGUI(): void;
    // properties
    ErrorUrl: string;
    currentUrl: string;
    // fields
  }
}
