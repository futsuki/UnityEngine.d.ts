declare namespace UnityEditor {
  class ModelInspector {
    // constructors
    constructor();
    // methods
    OnPreviewSettings(): any;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
    HasPreviewGUI(): boolean;
    OnPreviewGUI(r: any, background: any): any;
    OnDestroy(): any;
    GetInfoString(): string;
    DrawDefaultInspector(): boolean;
    OnInspectorGUI(): any;
    RequiresConstantRepaint(): boolean;
    Repaint(): any;
    GetPreviewTitle(): any;
    OnInteractivePreviewGUI(r: any, background: any): any;
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
    previewDir: any;
  }
}
