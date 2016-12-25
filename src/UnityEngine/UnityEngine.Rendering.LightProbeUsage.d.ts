declare namespace UnityEngine.Rendering {
  class LightProbeUsage {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static Off: UnityEngine.Rendering.LightProbeUsage;
    static BlendProbes: UnityEngine.Rendering.LightProbeUsage;
    static UseProxyVolume: UnityEngine.Rendering.LightProbeUsage;
  }
}
