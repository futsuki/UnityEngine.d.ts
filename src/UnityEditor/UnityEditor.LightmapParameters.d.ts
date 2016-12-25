declare namespace UnityEditor {
  class LightmapParameters {
    // constructors
    constructor();
    // methods
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    resolution: number;
    clusterResolution: number;
    irradianceBudget: number;
    irradianceQuality: number;
    backFaceTolerance: number;
    modellingTolerance: number;
    stitchEdges: boolean;
    systemTag: number;
    isTransparent: boolean;
    AOQuality: number;
    AOAntiAliasingSamples: number;
    blurRadius: number;
    directLightQuality: number;
    antiAliasingSamples: number;
    bakedLightmapTag: number;
    edgeStitching: number;
    name: string;
    hideFlags: any;
    // fields
  }
}
