declare namespace UnityEngine {
  class ParticleCollisionEvent {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    readonly intersection: UnityEngine.Vector3;
    readonly normal: UnityEngine.Vector3;
    readonly velocity: UnityEngine.Vector3;
    readonly collider: UnityEngine.Collider;
    readonly colliderComponent: UnityEngine.Component;
    // fields
  }
}
