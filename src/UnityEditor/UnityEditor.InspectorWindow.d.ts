declare namespace UnityEditor {
  class InspectorWindow {
    // constructors
    constructor();
    // methods
    static GetAllInspectorWindows(): UnityEditor.InspectorWindow[];
    AddItemsToMenu(menu: UnityEditor.GenericMenu): any;
    GetTracker(): UnityEditor.ActiveEditorTracker;
    GetLastInteractedEditor(): UnityEditor.Editor;
    GetEditorThatControlsPreview(editors: UnityEditor.IPreviewable[]): UnityEditor.IPreviewable;
    GetEditorsWithPreviews(editors: UnityEditor.Editor[]): UnityEditor.IPreviewable[];
    GetInspectedObject(): any;
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
    isLocked: boolean;
    wantsMouseMove: boolean;
    autoRepaintOnSceneChange: boolean;
    maximized: boolean;
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
    m_ScrollPosition: any;
    m_InspectorMode: UnityEditor.InspectorMode;
    static s_CurrentInspectorWindow: UnityEditor.InspectorWindow;
  }
}
