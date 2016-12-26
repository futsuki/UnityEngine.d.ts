declare namespace UnityEditor {
  class GUIView {
    // constructors
    constructor();
    // methods
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
    static readonly current: UnityEditor.GUIView;
    static readonly focusedView: UnityEditor.GUIView;
    static readonly mouseOverView: UnityEditor.GUIView;
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
