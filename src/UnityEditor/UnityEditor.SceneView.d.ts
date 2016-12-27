declare namespace UnityEditor {
  class SceneView {
    // constructors
    constructor();
    // methods
    SetSceneViewShaderReplace(shader: any, replaceString: string): void;
    static FrameLastActiveSceneView(): boolean;
    static FrameLastActiveSceneViewWithLock(): boolean;
    static GetAllSceneCameras(): any[];
    static RepaintAll(): void;
    OnEnable(): void;
    OnDisable(): void;
    OnDestroy(): void;
    OnSelectionChange(): void;
    AddItemsToMenu(menu: UnityEditor.GenericMenu): void;
    SetSceneViewFiltering(enable: boolean): void;
    FixNegativeSize(): void;
    LookAt(pos: any): void;
    LookAt(pos: any, rot: any): void;
    LookAtDirect(pos: any, rot: any): void;
    LookAt(pos: any, rot: any, newSize: number): void;
    LookAtDirect(pos: any, rot: any, newSize: number): void;
    LookAt(pos: any, rot: any, newSize: number, ortho: boolean): void;
    LookAt(pos: any, rot: any, newSize: number, ortho: boolean, instant: boolean): void;
    AlignViewToObject(t: any): void;
    AlignWithView(): void;
    MoveToView(): void;
    MoveToView(target: any): void;
    FrameSelected(): boolean;
    FrameSelected(lockView: boolean): boolean;
    static ShowCompileErrorNotification(): void;
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
    static onSceneGUIDelegate: ((UnityEditor.SceneView) => void);
    m_RenderMode: UnityEditor.DrawCameraMode;
  }
}
