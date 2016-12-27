declare namespace UnityEditor {
  class TerrainInspector extends UnityEditor.Editor {
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
    // properties
    // fields
  }
}
