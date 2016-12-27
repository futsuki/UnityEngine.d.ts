declare namespace UnityEditor.Web {
  class WebScriptObject extends UnityEngine.ScriptableObject {
    // constructors
    protected constructor();
    // methods
    ProcessMessage(jsonRequest: string, callback: UnityEditor.WebViewV8CallbackCSharp): boolean;
    processMessage(jsonRequest: string, callback: UnityEditor.WebViewV8CallbackCSharp): boolean;
    // properties
    webView: UnityEditor.WebView;
    // fields
  }
}
