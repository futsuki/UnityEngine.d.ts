declare namespace UnityEditor {
  class WebView extends UnityEngine.ScriptableObject {
    // constructors
    constructor();
    // methods
    OnDestroy(): void;
    InitWebView(host: UnityEditor.GUIView, x: number, y: number, width: number, height: number, showResizeHandle: boolean): void;
    ExecuteJavascript(scriptCode: string): void;
    LoadURL(url: string): void;
    LoadFile(path: string): void;
    DefineScriptObject(path: string, obj: UnityEngine.ScriptableObject): boolean;
    SetDelegateObject(value: UnityEngine.ScriptableObject): void;
    SetHostView(view: UnityEditor.GUIView): void;
    SetSizeAndPosition(x: number, y: number, width: number, height: number): void;
    SetFocus(value: boolean): void;
    HasApplicationFocus(): boolean;
    SetApplicationFocus(applicationFocus: boolean): void;
    Show(): void;
    Hide(): void;
    Back(): void;
    Forward(): void;
    SendOnEvent(jsonStr: string): void;
    Reload(): void;
    AllowRightClickMenu(allowRightClickMenu: boolean): void;
    ShowDevTools(): void;
    ToggleMaximize(): void;
    // properties
    // fields
  }
}
