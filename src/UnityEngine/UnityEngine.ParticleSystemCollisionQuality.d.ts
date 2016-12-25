declare namespace UnityEngine {
  class ParticleSystemCollisionQuality {
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
    static High: UnityEngine.ParticleSystemCollisionQuality;
    static Medium: UnityEngine.ParticleSystemCollisionQuality;
    static Low: UnityEngine.ParticleSystemCollisionQuality;
  }
}
