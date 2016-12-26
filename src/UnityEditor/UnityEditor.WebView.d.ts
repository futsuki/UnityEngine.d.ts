declare namespace UnityEditor {
  class WebView {
    // constructors
    constructor();
    // methods
    OnDestroy(): void;
    InitWebView(host: UnityEditor.GUIView, x: number, y: number, width: number, height: number, showResizeHandle: boolean): void;
    ExecuteJavascript(scriptCode: string): void;
    LoadURL(url: string): void;
    LoadFile(path: string): void;
    DefineScriptObject(path: string, obj: any): boolean;
    SetDelegateObject(value: any): void;
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
