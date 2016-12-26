declare namespace UnityEditor {
  class TextureImporterInspector {
    // constructors
    constructor();
    // methods
    OnDisable(): void;
    static IsCompressedDXTTextureFormat(format: UnityEditor.TextureImporterFormat): boolean;
    OnEnable(): void;
    OnInspectorGUI(): void;
    static GetBuildPlayerValidPlatforms(): UnityEditor.BuildPlayerWindow.BuildPlatform[];
    BuildTargetList(): void;
    static SelectMainAssets(targets: any[]): void;
    OnDisable(): void;
    DrawDefaultInspector(): boolean;
    RequiresConstantRepaint(): boolean;
    Repaint(): void;
    HasPreviewGUI(): boolean;
    GetPreviewTitle(): any;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
    OnPreviewGUI(r: any, background: any): void;
    OnInteractivePreviewGUI(r: any, background: any): void;
    OnPreviewSettings(): void;
    GetInfoString(): string;
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
    static s_DefaultPlatformName: string;
  }
}
