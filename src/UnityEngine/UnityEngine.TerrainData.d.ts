declare namespace UnityEngine {
  class TerrainData {
    // constructors
    constructor();
    // methods
    GetHeight(x: number, y: number): number;
    GetInterpolatedHeight(x: number, y: number): number;
    GetHeights(xBase: number, yBase: number, width: number, height: number): number[];
    SetHeights(xBase: number, yBase: number, heights: number[]): any;
    SetHeightsDelayLOD(xBase: number, yBase: number, heights: number[]): any;
    GetSteepness(x: number, y: number): number;
    GetInterpolatedNormal(x: number, y: number): UnityEngine.Vector3;
    SetDetailResolution(detailResolution: number, resolutionPerPatch: number): any;
    RefreshPrototypes(): any;
    GetSupportedLayers(xBase: number, yBase: number, totalWidth: number, totalHeight: number): number[];
    GetDetailLayer(xBase: number, yBase: number, width: number, height: number, layer: number): number[];
    SetDetailLayer(xBase: number, yBase: number, layer: number, details: number[]): any;
    GetTreeInstance(index: number): UnityEngine.TreeInstance;
    SetTreeInstance(index: number, instance: UnityEngine.TreeInstance): any;
    GetAlphamaps(x: number, y: number, width: number, height: number): number[];
    SetAlphamaps(x: number, y: number, map: number[]): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly heightmapWidth: number;
    readonly heightmapHeight: number;
    heightmapResolution: number;
    readonly heightmapScale: UnityEngine.Vector3;
    size: UnityEngine.Vector3;
    readonly bounds: UnityEngine.Bounds;
    thickness: number;
    wavingGrassStrength: number;
    wavingGrassAmount: number;
    wavingGrassSpeed: number;
    wavingGrassTint: UnityEngine.Color;
    readonly detailWidth: number;
    readonly detailHeight: number;
    readonly detailResolution: number;
    detailPrototypes: UnityEngine.DetailPrototype[];
    treeInstances: UnityEngine.TreeInstance[];
    readonly treeInstanceCount: number;
    treePrototypes: UnityEngine.TreePrototype[];
    readonly alphamapLayers: number;
    alphamapResolution: number;
    readonly alphamapWidth: number;
    readonly alphamapHeight: number;
    baseMapResolution: number;
    readonly alphamapTextures: UnityEngine.Texture2D[];
    splatPrototypes: UnityEngine.SplatPrototype[];
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}