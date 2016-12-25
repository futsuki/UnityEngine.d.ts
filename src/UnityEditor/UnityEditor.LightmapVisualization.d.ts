declare namespace UnityEditor {
  class LightmapVisualization {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static enabled: boolean;
    static useLightmaps: boolean;
    static showResolution: boolean;
    static showLightProbes: boolean;
    static showLightProbeLocations: boolean;
    static showLightProbeCells: boolean;
    static dynamicUpdateLightProbes: boolean;
    // fields
  }
}
