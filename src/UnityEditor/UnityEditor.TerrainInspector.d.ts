declare namespace UnityEditor {
  class TerrainInspector {
    // constructors
    constructor();
    // methods
    OnEnable(): any;
    OnDisable(): any;
    MenuButton(title: any, menuName: string, userData: number): any;
    static AspectSelectionGrid(selected: number, textures: any[], approxSize: number, style: any, emptyString: string, doubleClick: any): number;
    static AspectSelectionGridImageAndText(selected: number, textures: any[], approxSize: number, style: any, emptyString: string, doubleClick: any): number;
    ShowTrees(): any;
    ShowDetails(): any;
    ShowSettings(): any;
    ShowRaiseHeight(): any;
    ShowSmoothHeight(): any;
    ShowTextures(): any;
    ShowBrushes(): any;
    ShowHeightmaps(): any;
    ShowResolution(): any;
    ShowUpgradeTreePrototypeScaleUI(): any;
    ShowRefreshPrototypes(): any;
    ShowMassPlaceTrees(): any;
    ShowBrushSettings(): any;
    ShowSetHeight(): any;
    OnInspectorGUI(): any;
    Raycast(uv: any, pos: any): boolean;
    HasFrameBounds(): boolean;
    OnGetFrameBounds(): any;
    OnSceneGUI(): any;
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
