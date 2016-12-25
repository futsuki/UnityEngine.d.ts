declare namespace UnityEditor {
  class TextureInspector {
    // constructors
    constructor();
    // methods
    static IsNormalMap(t: any): boolean;
    GetMipLevelForRendering(): number;
    OnInspectorGUI(): any;
    OnPreviewSettings(): any;
    HasPreviewGUI(): boolean;
    OnPreviewGUI(r: any, background: any): any;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
    GetInfoString(): string;
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
    mipLevel: number;
    target: any;
    readonly targets: any[];
    readonly serializedObject: UnityEditor.SerializedObject;
    name: string;
    hideFlags: any;
    // fields
  }
}
