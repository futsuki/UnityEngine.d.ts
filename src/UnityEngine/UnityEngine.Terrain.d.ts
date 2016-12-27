declare namespace UnityEngine {
  class Terrain extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    GetClosestReflectionProbes(result: UnityEngine.Rendering.ReflectionProbeBlendInfo[]): void;
    SampleHeight(worldPosition: UnityEngine.Vector3): number;
    ApplyDelayedHeightmapModification(): void;
    AddTreeInstance(instance: UnityEngine.TreeInstance): void;
    SetNeighbors(left: UnityEngine.Terrain, top: UnityEngine.Terrain, right: UnityEngine.Terrain, bottom: UnityEngine.Terrain): void;
    GetPosition(): UnityEngine.Vector3;
    Flush(): void;
    SetSplatMaterialPropertyBlock(properties: UnityEngine.MaterialPropertyBlock): void;
    GetSplatMaterialPropertyBlock(dest: UnityEngine.MaterialPropertyBlock): void;
    static CreateTerrainGameObject(assignTerrain: UnityEngine.TerrainData): UnityEngine.GameObject;
    // properties
    terrainData: UnityEngine.TerrainData;
    treeDistance: number;
    treeBillboardDistance: number;
    treeCrossFadeLength: number;
    treeMaximumFullLODCount: number;
    detailObjectDistance: number;
    detailObjectDensity: number;
    heightmapPixelError: number;
    heightmapMaximumLOD: number;
    basemapDistance: number;
    splatmapDistance: number;
    lightmapIndex: number;
    realtimeLightmapIndex: number;
    lightmapScaleOffset: UnityEngine.Vector4;
    realtimeLightmapScaleOffset: UnityEngine.Vector4;
    castShadows: boolean;
    reflectionProbeUsage: UnityEngine.Rendering.ReflectionProbeUsage;
    materialType: UnityEngine.Terrain.MaterialType;
    materialTemplate: UnityEngine.Material;
    legacySpecular: UnityEngine.Color;
    legacyShininess: number;
    drawHeightmap: boolean;
    drawTreesAndFoliage: boolean;
    treeLODBiasMultiplier: number;
    collectDetailPatches: boolean;
    editorRenderFlags: UnityEngine.TerrainRenderFlags;
    bakeLightProbesForTrees: boolean;
    static readonly activeTerrain: UnityEngine.Terrain;
    static readonly activeTerrains: UnityEngine.Terrain[];
    // fields
  }
}
