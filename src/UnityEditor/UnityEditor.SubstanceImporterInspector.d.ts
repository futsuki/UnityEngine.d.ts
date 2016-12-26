declare namespace UnityEditor {
  class SubstanceImporterInspector {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    OnDisable(): void;
    OnInspectorGUI(): void;
    HasPreviewGUI(): boolean;
    OnPreviewGUI(position: any, style: any): void;
    GetInfoString(): string;
    OnPreviewSettings(): void;
    InstanciatePrototype(prototypeName: any): void;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
    DrawDefaultInspector(): boolean;
    RequiresConstantRepaint(): boolean;
    Repaint(): void;
    GetPreviewTitle(): any;
    OnInteractivePreviewGUI(r: any, background: any): void;
    ReloadPreviewInstances(): void;
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
    previewDir: any;
    selectedMesh: number;
    lightMode: number;
  }
}
