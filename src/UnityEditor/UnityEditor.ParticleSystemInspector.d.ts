declare namespace UnityEditor {
  class ParticleSystemInspector {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    OnDisable(): void;
    UseDefaultMargins(): boolean;
    OnInspectorGUI(): void;
    OnSceneGUI(): void;
    OnSceneViewGUI(sceneView: UnityEditor.SceneView): void;
    HasPreviewGUI(): boolean;
    OnPreviewGUI(r: any, background: any): void;
    GetPreviewTitle(): any;
    OnPreviewSettings(): void;
    DrawDefaultInspector(): boolean;
    RequiresConstantRepaint(): boolean;
    Repaint(): void;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
    OnInteractivePreviewGUI(r: any, background: any): void;
    GetInfoString(): string;
    ReloadPreviewInstances(): void;
    DrawHeader(): void;
    DrawPreview(previewArea: any): void;
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
    static readonly playBackTitle: any;
    target: any;
    readonly targets: any[];
    readonly serializedObject: UnityEditor.SerializedObject;
    name: string;
    hideFlags: any;
    // fields
  }
}
