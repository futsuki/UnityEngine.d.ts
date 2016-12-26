declare namespace UnityEditor {
  class TextureInspector {
    // constructors
    constructor();
    // methods
    static IsNormalMap(t: any): boolean;
    GetMipLevelForRendering(): number;
    OnInspectorGUI(): void;
    OnPreviewSettings(): void;
    HasPreviewGUI(): boolean;
    OnPreviewGUI(r: any, background: any): void;
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
