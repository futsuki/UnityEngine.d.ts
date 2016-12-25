declare namespace UnityEditor {
  class TextureImporterInspector {
    // constructors
    constructor();
    // methods
    OnDisable(): any;
    static IsCompressedDXTTextureFormat(format: UnityEditor.TextureImporterFormat): boolean;
    OnEnable(): any;
    OnInspectorGUI(): any;
    static GetBuildPlayerValidPlatforms(): UnityEditor.BuildPlayerWindow.BuildPlatform[];
    BuildTargetList(): any;
    static SelectMainAssets(targets: any[]): any;
    OnDisable(): any;
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
    target: any;
    readonly targets: any[];
    readonly serializedObject: UnityEditor.SerializedObject;
    name: string;
    hideFlags: any;
    // fields
    static s_DefaultPlatformName: string;
  }
}
