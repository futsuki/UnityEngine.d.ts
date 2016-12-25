declare namespace UnityEditor {
  class AudioClipInspector {
    // constructors
    constructor();
    // methods
    OnInspectorGUI(): any;
    OnDisable(): any;
    OnEnable(): any;
    OnDestroy(): any;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
    HasPreviewGUI(): boolean;
    OnPreviewSettings(): any;
    OnPreviewGUI(r: any, background: any): any;
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
    target: any;
    readonly targets: any[];
    readonly serializedObject: UnityEditor.SerializedObject;
    name: string;
    hideFlags: any;
    // fields
  }
}
