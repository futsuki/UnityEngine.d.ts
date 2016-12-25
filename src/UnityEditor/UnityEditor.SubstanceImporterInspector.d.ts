declare namespace UnityEditor {
  class SubstanceImporterInspector {
    // constructors
    constructor();
    // methods
    OnEnable(): any;
    OnDisable(): any;
    OnInspectorGUI(): any;
    HasPreviewGUI(): boolean;
    OnPreviewGUI(position: any, style: any): any;
    GetInfoString(): string;
    OnPreviewSettings(): any;
    InstanciatePrototype(prototypeName: any): any;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
    DrawDefaultInspector(): boolean;
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
    selectedMesh: number;
    lightMode: number;
  }
}
