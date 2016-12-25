declare namespace UnityEditor {
  class Joint2DEditor {
    // constructors
    constructor();
    // methods
    OnEnable(): any;
    OnInspectorGUI(): any;
    static AnchorHandleCap(controlID: number, position: any, rotation: any, size: number, eventType: any): any;
    static ConnectedAnchorHandleCap(controlID: number, position: any, rotation: any, size: number, eventType: any): any;
    static DrawAALine(start: any, end: any): any;
    static DrawDistanceGizmo(anchor: any, connectedAnchor: any, distance: number): any;
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
  }
}
