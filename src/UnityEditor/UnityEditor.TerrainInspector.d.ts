declare namespace UnityEditor {
  class TerrainInspector {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    OnDisable(): void;
    MenuButton(title: any, menuName: string, userData: number): void;
    static AspectSelectionGrid(selected: number, textures: any[], approxSize: number, style: any, emptyString: string, doubleClick: any): number;
    static AspectSelectionGridImageAndText(selected: number, textures: any[], approxSize: number, style: any, emptyString: string, doubleClick: any): number;
    ShowTrees(): void;
    ShowDetails(): void;
    ShowSettings(): void;
    ShowRaiseHeight(): void;
    ShowSmoothHeight(): void;
    ShowTextures(): void;
    ShowBrushes(): void;
    ShowHeightmaps(): void;
    ShowResolution(): void;
    ShowUpgradeTreePrototypeScaleUI(): void;
    ShowRefreshPrototypes(): void;
    ShowMassPlaceTrees(): void;
    ShowBrushSettings(): void;
    ShowSetHeight(): void;
    OnInspectorGUI(): void;
    Raycast(uv: any, pos: any): boolean;
    HasFrameBounds(): boolean;
    OnGetFrameBounds(): any;
    OnSceneGUI(): void;
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
  }
}
