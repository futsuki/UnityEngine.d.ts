declare namespace UnityEditor {
  class ParticleSystemInspector {
    // constructors
    constructor();
    // methods
    OnEnable(): any;
    OnDisable(): any;
    UseDefaultMargins(): boolean;
    OnInspectorGUI(): any;
    OnSceneGUI(): any;
    OnSceneViewGUI(sceneView: UnityEditor.SceneView): any;
    HasPreviewGUI(): boolean;
    OnPreviewGUI(r: any, background: any): any;
    GetPreviewTitle(): any;
    OnPreviewSettings(): any;
    DrawDefaultInspector(): boolean;
    RequiresConstantRepaint(): boolean;
    Repaint(): any;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
    OnInteractivePreviewGUI(r: any, background: any): any;
    GetInfoString(): string;
    ReloadPreviewInstances(): any;
    DrawHeader(): any;
    DrawPreview(previewArea: any): any;
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
    static readonly playBackTitle: any;
    target: any;
    readonly targets: any[];
    readonly serializedObject: UnityEditor.SerializedObject;
    name: string;
    hideFlags: any;
    // fields
  }
}
