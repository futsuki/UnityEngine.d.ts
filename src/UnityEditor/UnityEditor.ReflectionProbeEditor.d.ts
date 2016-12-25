declare namespace UnityEditor {
  class ReflectionProbeEditor {
    // constructors
    constructor();
    // methods
    OnEnable(): any;
    OnDisable(): any;
    OnInspectorGUI(): any;
    HasPreviewGUI(): boolean;
    OnPreviewSettings(): any;
    OnPreviewGUI(position: any, style: any): any;
    OnSceneGUI(): any;
    DrawDefaultInspector(): boolean;
    RequiresConstantRepaint(): boolean;
    Repaint(): any;
    GetPreviewTitle(): any;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
    OnInteractivePreviewGUI(r: any, background: any): any;
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
    target: any;
    readonly targets: any[];
    readonly serializedObject: UnityEditor.SerializedObject;
    name: string;
    hideFlags: any;
    // fields
  }
}
