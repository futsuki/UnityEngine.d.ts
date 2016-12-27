declare namespace UnityEngine {
  class ParticlePhysicsExtensions extends System.Object {
    // constructors
    protected constructor();
    // methods
    static GetSafeCollisionEventSize(ps: UnityEngine.ParticleSystem): number;
    static GetCollisionEvents(ps: UnityEngine.ParticleSystem, go: UnityEngine.GameObject, collisionEvents: UnityEngine.ParticleCollisionEvent[]): number;
    static GetCollisionEvents(ps: UnityEngine.ParticleSystem, go: UnityEngine.GameObject, collisionEvents: UnityEngine.ParticleCollisionEvent[]): number;
    static GetSafeTriggerParticlesSize(ps: UnityEngine.ParticleSystem, type: UnityEngine.ParticleSystemTriggerEventType): number;
    static GetTriggerParticles(ps: UnityEngine.ParticleSystem, type: UnityEngine.ParticleSystemTriggerEventType, particles: UnityEngine.ParticleSystem.Particle[]): number;
    static SetTriggerParticles(ps: UnityEngine.ParticleSystem, type: UnityEngine.ParticleSystemTriggerEventType, particles: UnityEngine.ParticleSystem.Particle[], offset: number, count: number): void;
    static SetTriggerParticles(ps: UnityEngine.ParticleSystem, type: UnityEngine.ParticleSystemTriggerEventType, particles: UnityEngine.ParticleSystem.Particle[]): void;
    // properties
    // fields
  }
}
