declare namespace UnityEditor {
  class WebView {
    // constructors
    constructor();
    // methods
    OnDestroy(): any;
    InitWebView(host: UnityEditor.GUIView, x: number, y: number, width: number, height: number, showResizeHandle: boolean): any;
    ExecuteJavascript(scriptCode: string): any;
    LoadURL(url: string): any;
    LoadFile(path: string): any;
    DefineScriptObject(path: string, obj: any): boolean;
    SetDelegateObject(value: any): any;
    SetHostView(view: UnityEditor.GUIView): any;
    SetSizeAndPosition(x: number, y: number, width: number, height: number): any;
    SetFocus(value: boolean): any;
    HasApplicationFocus(): boolean;
    SetApplicationFocus(applicationFocus: boolean): any;
    Show(): any;
    Hide(): any;
    Back(): any;
    Forward(): any;
    SendOnEvent(jsonStr: string): any;
    Reload(): any;
    AllowRightClickMenu(allowRightClickMenu: boolean): any;
    ShowDevTools(): any;
    ToggleMaximize(): any;
    SetDirty(): any;
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
