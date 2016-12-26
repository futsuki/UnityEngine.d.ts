declare namespace UnityEditor {
  class ProceduralTextureInspector {
    // constructors
    constructor();
    // methods
    OnInspectorGUI(): void;
    OnPreviewGUI(r: any, background: any): void;
    GetMipLevelForRendering(): number;
    OnPreviewSettings(): void;
    HasPreviewGUI(): boolean;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
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
    mipLevel: number;
    target: any;
    readonly targets: any[];
    readonly serializedObject: UnityEditor.SerializedObject;
    name: string;
    hideFlags: any;
    // fields
  }
}
