declare namespace UnityEngine {
  class ParticleEmitter extends UnityEngine.Component {
    // constructors
    protected constructor();
    // methods
    ClearParticles(): void;
    Emit(): void;
    Emit(count: number): void;
    Emit(pos: UnityEngine.Vector3, velocity: UnityEngine.Vector3, size: number, energy: number, color: UnityEngine.Color): void;
    Emit(pos: UnityEngine.Vector3, velocity: UnityEngine.Vector3, size: number, energy: number, color: UnityEngine.Color, rotation: number, angularVelocity: number): void;
    Simulate(deltaTime: number): void;
    // properties
    emit: boolean;
    minSize: number;
    maxSize: number;
    minEnergy: number;
    maxEnergy: number;
    minEmission: number;
    maxEmission: number;
    emitterVelocityScale: number;
    worldVelocity: UnityEngine.Vector3;
    localVelocity: UnityEngine.Vector3;
    rndVelocity: UnityEngine.Vector3;
    useWorldSpace: boolean;
    rndRotation: boolean;
    angularVelocity: number;
    rndAngularVelocity: number;
    particles: UnityEngine.Particle[];
    readonly particleCount: number;
    enabled: boolean;
    // fields
  }
}
