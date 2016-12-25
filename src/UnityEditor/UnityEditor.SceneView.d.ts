declare namespace UnityEditor {
  class SceneView {
    // constructors
    constructor();
    // methods
    SetSceneViewShaderReplace(shader: any, replaceString: string): any;
    static FrameLastActiveSceneView(): boolean;
    static FrameLastActiveSceneViewWithLock(): boolean;
    static GetAllSceneCameras(): any[];
    static RepaintAll(): any;
    OnEnable(): any;
    OnDisable(): any;
    OnDestroy(): any;
    OnSelectionChange(): any;
    AddItemsToMenu(menu: UnityEditor.GenericMenu): any;
    SetSceneViewFiltering(enable: boolean): any;
    FixNegativeSize(): any;
    LookAt(pos: any): any;
    LookAt(pos: any, rot: any): any;
    LookAtDirect(pos: any, rot: any): any;
    LookAt(pos: any, rot: any, newSize: number): any;
    LookAtDirect(pos: any, rot: any, newSize: number): any;
    LookAt(pos: any, rot: any, newSize: number, ortho: boolean): any;
    LookAt(pos: any, rot: any, newSize: number, ortho: boolean, instant: boolean): any;
    AlignViewToObject(t: any): any;
    AlignWithView(): any;
    MoveToView(): any;
    MoveToView(target: any): any;
    FrameSelected(): boolean;
    FrameSelected(lockView: boolean): boolean;
    static ShowCompileErrorNotification(): any;
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
    static readonly lastActiveSceneView: UnityEditor.SceneView;
    static readonly currentDrawingSceneView: UnityEditor.SceneView;
    in2DMode: boolean;
    isRotationLocked: boolean;
    renderMode: UnityEditor.DrawCameraMode;
    lastSceneViewRotation: any;
    static readonly sceneViews: any;
    readonly camera: any;
    pivot: any;
    rotation: any;
    size: number;
    orthographic: boolean;
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
    m_SceneLighting: boolean;
    lastFramingTime: number;
    m_AudioPlay: boolean;
    static onSceneGUIDelegate: UnityEditor.SceneView.OnSceneFunc;
    m_RenderMode: UnityEditor.DrawCameraMode;
  }
}
