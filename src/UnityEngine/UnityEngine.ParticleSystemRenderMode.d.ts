declare namespace UnityEngine {
  class ParticleSystemRenderMode {
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
    static Billboard: UnityEngine.ParticleSystemRenderMode;
    static Stretch: UnityEngine.ParticleSystemRenderMode;
    static HorizontalBillboard: UnityEngine.ParticleSystemRenderMode;
    static VerticalBillboard: UnityEngine.ParticleSystemRenderMode;
    static Mesh: UnityEngine.ParticleSystemRenderMode;
    static None: UnityEngine.ParticleSystemRenderMode;
  }
}
