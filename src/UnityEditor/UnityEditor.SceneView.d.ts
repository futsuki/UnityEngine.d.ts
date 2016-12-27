declare namespace UnityEditor {
  class SceneView extends UnityEditor.SearchableEditorWindow {
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
    LookAt(pos: any, rot: any, newSize: number): void;
    LookAt(pos: any, rot: any, newSize: number, ortho: boolean): void;
    LookAt(pos: any, rot: any, newSize: number, ortho: boolean, instant: boolean): void;
    LookAtDirect(pos: any, rot: any): void;
    LookAtDirect(pos: any, rot: any, newSize: number): void;
    AlignViewToObject(t: any): void;
    AlignWithView(): void;
    MoveToView(): void;
    MoveToView(target: any): void;
    FrameSelected(): boolean;
    FrameSelected(lockView: boolean): boolean;
    static ShowCompileErrorNotification(): void;
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
    // fields
    m_SceneLighting: boolean;
    lastFramingTime: number;
    m_AudioPlay: boolean;
    static onSceneGUIDelegate: ((sceneView: UnityEditor.SceneView) => void);
    m_RenderMode: UnityEditor.DrawCameraMode;
  }
}
