declare namespace UnityEngine.ParticleSystem {
  class TriggerModule extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    SetCollider(index: number, collider: UnityEngine.Component): void;
    GetCollider(index: number): UnityEngine.Component;
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
