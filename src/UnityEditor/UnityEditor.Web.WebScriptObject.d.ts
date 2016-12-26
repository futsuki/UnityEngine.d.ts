declare namespace UnityEditor.Web {
  class WebScriptObject {
    // constructors
    private constructor();
    // methods
    ProcessMessage(jsonRequest: string, callback: UnityEditor.WebViewV8CallbackCSharp): boolean;
    processMessage(jsonRequest: string, callback: UnityEditor.WebViewV8CallbackCSharp): boolean;
    SetDirty(): void;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    webView: UnityEditor.WebView;
    name: string;
    hideFlags: any;
    // fields
  }
}
