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
    BeginWindows(): void;
    EndWindows(): void;
    ShowNotification(notification: any): void;
    RemoveNotification(): void;
    ShowTab(): void;
    Focus(): void;
    ShowUtility(): void;
    ShowPopup(): void;
    ShowAsDropDown(buttonRect: any, windowSize: any): void;
    Show(): void;
    Show(immediateDisplay: boolean): void;
    ShowAuxWindow(): void;
    static FocusWindowIfItsOpen(t: any): void;
    Close(): void;
    Repaint(): void;
    SendEvent(e: any): boolean;
    SetDirty(): void;
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
