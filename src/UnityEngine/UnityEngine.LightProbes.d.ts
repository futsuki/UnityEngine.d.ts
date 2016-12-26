declare namespace UnityEngine {
  class LightProbes {
    // constructors
    constructor();
    // methods
    static GetInterpolatedProbe(position: UnityEngine.Vector3, renderer: UnityEngine.Renderer, probe: any): void;
    GetInterpolatedLightProbe(position: UnityEngine.Vector3, renderer: UnityEngine.Renderer, coefficients: number[]): void;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly positions: UnityEngine.Vector3[];
    bakedProbes: UnityEngine.Rendering.SphericalHarmonicsL2[];
    readonly count: number;
    readonly cellCount: number;
    coefficients: number[];
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
