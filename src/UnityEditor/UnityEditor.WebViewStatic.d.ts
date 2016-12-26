declare namespace UnityEditor {
  class WebViewStatic {
    // constructors
    constructor();
    // methods
    static GetWebView(): UnityEditor.WebView;
    static SetWebView(webView: UnityEditor.WebView): void;
    SetDirty(): void;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    name: string;
    hideFlags: any;
    // fields
  }
}
