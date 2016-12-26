declare namespace UnityEditor {
  class GameObjectInspector {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    OnInspectorGUI(): void;
    static SetEnabledRecursive(go: any, enabled: boolean): void;
    ReloadPreviewInstances(): void;
    OnDestroy(): void;
    static HasRenderableParts(go: any): boolean;
    static GetRenderableBoundsRecurse(bounds: any, go: any): void;
    static GetRenderableCenterRecurse(go: any, minDepth: number, maxDepth: number): any;
    HasPreviewGUI(): boolean;
    OnPreviewSettings(): void;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
    OnPreviewGUI(r: any, background: any): void;
    OnSceneDrag(sceneView: UnityEditor.SceneView): void;
    DrawDefaultInspector(): boolean;
    RequiresConstantRepaint(): boolean;
    Repaint(): void;
    GetPreviewTitle(): any;
    OnInteractivePreviewGUI(r: any, background: any): void;
    GetInfoString(): string;
    DrawHeader(): void;
    DrawPreview(previewArea: any): void;
    UseDefaultMargins(): boolean;
    Initialize(targets: any[]): void;
    MoveNextTarget(): boolean;
    ResetTarget(): void;
    SetDirty(): void;
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
