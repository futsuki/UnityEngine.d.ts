declare namespace UnityEditor {
  class PreviewWindow {
    // constructors
    constructor();
    // methods
    SetParentInspector(inspector: UnityEditor.InspectorWindow): void;
    GetLastInteractedEditor(): UnityEditor.Editor;
    AddItemsToMenu(menu: UnityEditor.GenericMenu): void;
    GetTracker(): UnityEditor.ActiveEditorTracker;
    GetEditorThatControlsPreview(editors: UnityEditor.IPreviewable[]): UnityEditor.IPreviewable;
    GetEditorsWithPreviews(editors: UnityEditor.Editor[]): UnityEditor.IPreviewable[];
    GetInspectedObject(): any;
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
  }
}
