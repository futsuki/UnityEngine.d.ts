declare namespace UnityEditor {
  class EditorWindow {
    // constructors
    constructor();
    // methods
    static GetWindow(t: any, utility: boolean, title: string): UnityEditor.EditorWindow;
    static GetWindow(t: any, utility: boolean): UnityEditor.EditorWindow;
    static GetWindow(t: any): UnityEditor.EditorWindow;
    static GetWindow(t: any, utility: boolean, title: string, focus: boolean): UnityEditor.EditorWindow;
    static GetWindowWithRect(t: any, rect: any, utility: boolean): UnityEditor.EditorWindow;
    static GetWindowWithRect(t: any, rect: any): UnityEditor.EditorWindow;
    static GetWindowWithRect(t: any, rect: any, utility: boolean, title: string): UnityEditor.EditorWindow;
    BeginWindows(): any;
    EndWindows(): any;
    ShowNotification(notification: any): any;
    RemoveNotification(): any;
    ShowTab(): any;
    Focus(): any;
    ShowUtility(): any;
    ShowPopup(): any;
    ShowAsDropDown(buttonRect: any, windowSize: any): any;
    Show(): any;
    Show(immediateDisplay: boolean): any;
    ShowAuxWindow(): any;
    static FocusWindowIfItsOpen(t: any): any;
    Close(): any;
    Repaint(): any;
    SendEvent(e: any): boolean;
    SetDirty(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    wantsMouseMove: boolean;
    autoRepaintOnSceneChange: boolean;
    maximized: boolean;
    static readonly focusedWindow: UnityEditor.EditorWindow;
    static readonly mouseOverWindow: UnityEditor.EditorWindow;
    minSize: any;
    maxSize: any;
    title: string;
    titleContent: any;
    depthBufferBits: number;
    antiAlias: number;
    position: any;
    name: string;
    hideFlags: any;
    // fields
  }
}
