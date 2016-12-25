declare namespace UnityEngine {
  class ParticleSystemGradientMode {
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
    static Color: UnityEngine.ParticleSystemGradientMode;
    static Gradient: UnityEngine.ParticleSystemGradientMode;
    static TwoColors: UnityEngine.ParticleSystemGradientMode;
    static TwoGradients: UnityEngine.ParticleSystemGradientMode;
    static RandomColor: UnityEngine.ParticleSystemGradientMode;
  }
}
