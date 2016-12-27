declare namespace UnityEditor {
  class GUIView extends UnityEditor.View {
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
    OnDestroy(): void;
    // properties
    static readonly current: UnityEditor.GUIView;
    static readonly focusedView: UnityEditor.GUIView;
    static readonly mouseOverView: UnityEditor.GUIView;
    readonly hasFocus: boolean;
    wantsMouseMove: boolean;
    autoRepaintOnSceneChange: boolean;
    depthBufferBits: number;
    antiAlias: number;
    // fields
  }
}
