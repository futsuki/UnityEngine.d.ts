declare namespace UnityEditor {
  class PolygonCollider2DEditor {
    // constructors
    constructor();
    // methods
    OnEnable(): any;
    OnInspectorGUI(): any;
    OnSceneGUI(): any;
    OnDisable(): any;
    FinalizeInspectorGUI(): any;
    DrawDefaultInspector(): boolean;
    RequiresConstantRepaint(): boolean;
    Repaint(): any;
    HasPreviewGUI(): boolean;
    GetPreviewTitle(): any;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
    OnPreviewGUI(r: any, background: any): any;
    OnInteractivePreviewGUI(r: any, background: any): any;
    OnPreviewSettings(): any;
    GetInfoString(): string;
    ReloadPreviewInstances(): any;
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
    readonly editingCollider: boolean;
    target: any;
    readonly targets: any[];
    readonly serializedObject: UnityEditor.SerializedObject;
    name: string;
    hideFlags: any;
    // fields
  }
}