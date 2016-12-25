declare namespace UnityEditor {
  class TooltipView {
    // constructors
    constructor();
    // methods
    static Show(tooltip: string, rect: any): any;
    static Close(): any;
    static SetAlpha(percent: number): any;
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
