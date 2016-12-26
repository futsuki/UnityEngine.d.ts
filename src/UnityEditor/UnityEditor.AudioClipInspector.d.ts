declare namespace UnityEditor {
  class AudioClipInspector {
    // constructors
    constructor();
    // methods
    OnInspectorGUI(): void;
    OnDisable(): void;
    OnEnable(): void;
    OnDestroy(): void;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
    HasPreviewGUI(): boolean;
    OnPreviewSettings(): void;
    OnPreviewGUI(r: any, background: any): void;
    GetInfoString(): string;
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
  }
}
