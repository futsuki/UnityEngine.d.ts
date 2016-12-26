declare namespace UnityEditor {
  class Lightmapping {
    // constructors
    constructor();
    // methods
    static ClearDiskCache(): void;
    static BakeAsync(): boolean;
    static Bake(): boolean;
    static Cancel(): void;
    static Clear(): void;
    static ClearLightingDataAsset(): void;
    static Tetrahedralize(positions: any[], outIndices: any, outPositions: any): void;
    static BakeReflectionProbe(probe: any, path: string): boolean;
    static GetTerrainGIChunks(terrain: any, numChunksX: any, numChunksY: any): void;
    static BakeMultipleScenes(paths: string[]): void;
    static BakeSelectedAsync(): boolean;
    static BakeSelected(): boolean;
    static BakeLightProbesOnlyAsync(): boolean;
    static BakeLightProbesOnly(): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static giWorkflowMode: UnityEditor.Lightmapping.GIWorkflowMode;
    static realtimeGI: boolean;
    static bakedGI: boolean;
    static indirectOutputScale: number;
    static bounceBoost: number;
    static readonly isRunning: boolean;
    static readonly buildProgress: number;
    static lightingDataAsset: UnityEditor.LightingDataAsset;
    static lightmapSnapshot: UnityEditor.LightmapSnapshot;
    // fields
    static completed: UnityEditor.Lightmapping.OnCompletedFunction;
  }
}
