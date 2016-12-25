declare namespace UnityEngine {
  class ParticleSystemTriggerEventType {
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
    static Inside: UnityEngine.ParticleSystemTriggerEventType;
    static Outside: UnityEngine.ParticleSystemTriggerEventType;
    static Enter: UnityEngine.ParticleSystemTriggerEventType;
    static Exit: UnityEngine.ParticleSystemTriggerEventType;
  }
}
