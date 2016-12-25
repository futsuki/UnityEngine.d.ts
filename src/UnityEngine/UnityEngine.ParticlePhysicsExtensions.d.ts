declare namespace UnityEngine {
  class ParticlePhysicsExtensions {
    // constructors
    private constructor();
    // methods
    static GetSafeCollisionEventSize(ps: UnityEngine.ParticleSystem): number;
    static GetCollisionEvents(ps: UnityEngine.ParticleSystem, go: UnityEngine.GameObject, collisionEvents: any): number;
    static GetCollisionEvents(ps: UnityEngine.ParticleSystem, go: UnityEngine.GameObject, collisionEvents: UnityEngine.ParticleCollisionEvent[]): number;
    static GetSafeTriggerParticlesSize(ps: UnityEngine.ParticleSystem, type: UnityEngine.ParticleSystemTriggerEventType): number;
    static GetTriggerParticles(ps: UnityEngine.ParticleSystem, type: UnityEngine.ParticleSystemTriggerEventType, particles: any): number;
    static SetTriggerParticles(ps: UnityEngine.ParticleSystem, type: UnityEngine.ParticleSystemTriggerEventType, particles: any, offset: number, count: number): any;
    static SetTriggerParticles(ps: UnityEngine.ParticleSystem, type: UnityEngine.ParticleSystemTriggerEventType, particles: any): any;
    // properties
    // fields
  }
}
