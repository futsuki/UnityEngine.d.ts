declare namespace UnityEngine.ParticleSystem {
  class TriggerModule {
    // constructors
    private constructor();
    // methods
    SetCollider(index: number, collider: UnityEngine.Component): any;
    GetCollider(index: number): UnityEngine.Component;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    enabled: boolean;
    inside: UnityEngine.ParticleSystemOverlapAction;
    outside: UnityEngine.ParticleSystemOverlapAction;
    enter: UnityEngine.ParticleSystemOverlapAction;
    exit: UnityEngine.ParticleSystemOverlapAction;
    radiusScale: number;
    readonly maxColliderCount: number;
    // fields
  }
}
