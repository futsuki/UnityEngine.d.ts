declare namespace UnityEditor {
  class DockArea {
    // constructors
    constructor();
    // methods
    OnDestroy(): any;
    OnEnable(): any;
    AddTab(pane: UnityEditor.EditorWindow): any;
    AddTab(idx: number, pane: UnityEditor.EditorWindow): any;
    RemoveTab(pane: UnityEditor.EditorWindow): any;
    RemoveTab(pane: UnityEditor.EditorWindow, killIfEmpty: boolean): any;
    DragOver(window: UnityEditor.EditorWindow, mouseScreenPosition: any): UnityEditor.DropInfo;
    PerformDrop(w: UnityEditor.EditorWindow, info: UnityEditor.DropInfo, screenPos: any): boolean;
    OnGUI(): any;
    OnEnable(): any;
    OnDestroy(): any;
    InvokeOnGUI(onGUIPosition: any): any;
    PopupGenericMenu(view: UnityEditor.EditorWindow, pos: any): any;
    SetInternalGameViewDimensions(rect: any, clippedRect: any, targetSize: any): any;
    SetAsStartView(): any;
    ClearStartView(): any;
    Focus(): any;
    Repaint(): any;
    RepaintImmediately(): any;
    CaptureRenderDoc(): any;
    OnDestroy(): any;
    IndexOfChild(child: UnityEditor.View): number;
    OnDestroy(): any;
    AddChild(child: UnityEditor.View): any;
    AddChild(child: UnityEditor.View, idx: number): any;
    RemoveChild(child: UnityEditor.View): any;
    RemoveChild(idx: number): any;
    SetDirty(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    selected: number;
    readonly hasFocus: boolean;
    wantsMouseMove: boolean;
    autoRepaintOnSceneChange: boolean;
    depthBufferBits: number;
    antiAlias: number;
    readonly minSize: any;
    readonly maxSize: any;
    readonly allChildren: UnityEditor.View[];
    position: any;
    readonly windowPosition: any;
    readonly screenPosition: any;
    readonly window: UnityEditor.ContainerWindow;
    readonly parent: UnityEditor.View;
    readonly children: UnityEditor.View[];
    name: string;
    hideFlags: any;
    // fields
  }
}
