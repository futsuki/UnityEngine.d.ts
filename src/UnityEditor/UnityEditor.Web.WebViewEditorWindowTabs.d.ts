declare namespace UnityEditor.Web {
  class WebViewEditorWindowTabs extends UnityEditor.Web.WebViewEditorWindow {
    // constructors
    protected constructor();
    // methods
    Init(): void;
    OnDestroy(): void;
    OnBeforeSerialize(): void;
    OnAfterDeserialize(): void;
    GetWebViewFromURL(url: string): UnityEditor.WebView;
    OnInitScripting(): void;
    // properties
    // fields
  }
}
