declare namespace UnityEditor {
  class GameObjectInspector {
    // constructors
    constructor();
    // methods
    OnEnable(): any;
    OnInspectorGUI(): any;
    static SetEnabledRecursive(go: any, enabled: boolean): any;
    ReloadPreviewInstances(): any;
    OnDestroy(): any;
    static HasRenderableParts(go: any): boolean;
    static GetRenderableBoundsRecurse(bounds: any, go: any): any;
    static GetRenderableCenterRecurse(go: any, minDepth: number, maxDepth: number): any;
    HasPreviewGUI(): boolean;
    OnPreviewSettings(): any;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
    OnPreviewGUI(r: any, background: any): any;
    OnSceneDrag(sceneView: UnityEditor.SceneView): any;
    DrawDefaultInspector(): boolean;
    RequiresConstantRepaint(): boolean;
    Repaint(): any;
    GetPreviewTitle(): any;
    OnInteractivePreviewGUI(r: any, background: any): any;
    GetInfoString(): string;
    DrawHeader(): any;
    DrawPreview(previewArea: any): any;
    UseDefaultMargins(): boolean;
    Initialize(targets: any[]): any;
    MoveNextTarget(): boolean;
    ResetTarget(): any;
    SetDirty(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    target: any;
    readonly targets: any[];
    readonly serializedObject: UnityEditor.SerializedObject;
    name: string;
    hideFlags: any;
    // fields
    static dragObject: any;
  }
}
