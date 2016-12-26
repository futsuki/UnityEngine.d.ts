declare namespace UnityEditor {
  class DockArea {
    // constructors
    constructor();
    // methods
    OnDestroy(): void;
    OnEnable(): void;
    AddTab(pane: UnityEditor.EditorWindow): void;
    AddTab(idx: number, pane: UnityEditor.EditorWindow): void;
    RemoveTab(pane: UnityEditor.EditorWindow): void;
    RemoveTab(pane: UnityEditor.EditorWindow, killIfEmpty: boolean): void;
    DragOver(window: UnityEditor.EditorWindow, mouseScreenPosition: any): UnityEditor.DropInfo;
    PerformDrop(w: UnityEditor.EditorWindow, info: UnityEditor.DropInfo, screenPos: any): boolean;
    OnGUI(): void;
    OnEnable(): void;
    OnDestroy(): void;
    InvokeOnGUI(onGUIPosition: any): void;
    PopupGenericMenu(view: UnityEditor.EditorWindow, pos: any): void;
    SetInternalGameViewDimensions(rect: any, clippedRect: any, targetSize: any): void;
    SetAsStartView(): void;
    ClearStartView(): void;
    Focus(): void;
    Repaint(): void;
    RepaintImmediately(): void;
    CaptureRenderDoc(): void;
    OnDestroy(): void;
    IndexOfChild(child: UnityEditor.View): number;
    OnDestroy(): void;
    AddChild(child: UnityEditor.View): void;
    AddChild(child: UnityEditor.View, idx: number): void;
    RemoveChild(child: UnityEditor.View): void;
    RemoveChild(idx: number): void;
    SetDirty(): void;
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
