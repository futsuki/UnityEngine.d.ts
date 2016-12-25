declare namespace UnityEngine {
  class ParticleRenderMode {
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
    static Billboard: UnityEngine.ParticleRenderMode;
    static Stretch: UnityEngine.ParticleRenderMode;
    static SortedBillboard: UnityEngine.ParticleRenderMode;
    static HorizontalBillboard: UnityEngine.ParticleRenderMode;
    static VerticalBillboard: UnityEngine.ParticleRenderMode;
  }
}
