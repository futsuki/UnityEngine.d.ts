declare namespace UnityEngine {
  class LightProbes extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    static GetInterpolatedProbe(position: UnityEngine.Vector3, renderer: UnityEngine.Renderer, probe: any): void;
    GetInterpolatedLightProbe(position: UnityEngine.Vector3, renderer: UnityEngine.Renderer, coefficients: number[]): void;
    // properties
    readonly positions: UnityEngine.Vector3[];
    bakedProbes: UnityEngine.Rendering.SphericalHarmonicsL2[];
    readonly count: number;
    readonly cellCount: number;
    coefficients: number[];
    // fields
  }
}
