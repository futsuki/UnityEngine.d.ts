declare namespace UnityEngine {
  class ParticleSystem extends UnityEngine.Component {
    // constructors
    constructor();
    // methods
    SetParticles(particles: UnityEngine.ParticleSystem.Particle[], size: number): void;
    GetParticles(particles: UnityEngine.ParticleSystem.Particle[]): number;
    SetCustomParticleData(customData: UnityEngine.Vector4[], streamIndex: UnityEngine.ParticleSystemCustomData): void;
    GetCustomParticleData(customData: UnityEngine.Vector4[], streamIndex: UnityEngine.ParticleSystemCustomData): number;
    Simulate(t: number, withChildren: boolean, restart: boolean): void;
    Simulate(t: number, withChildren: boolean): void;
    Simulate(t: number): void;
    Simulate(t: number, withChildren: boolean, restart: boolean, fixedTimeStep: boolean): void;
    Play(): void;
    Play(withChildren: boolean): void;
    Stop(withChildren: boolean): void;
    Stop(): void;
    Stop(withChildren: boolean, stopBehavior: UnityEngine.ParticleSystemStopBehavior): void;
    Pause(): void;
    Pause(withChildren: boolean): void;
    Clear(): void;
    Clear(withChildren: boolean): void;
    IsAlive(): boolean;
    IsAlive(withChildren: boolean): boolean;
    Emit(count: number): void;
    Emit(position: UnityEngine.Vector3, velocity: UnityEngine.Vector3, size: number, lifetime: number, color: UnityEngine.Color32): void;
    Emit(particle: UnityEngine.ParticleSystem.Particle): void;
    Emit(emitParams: UnityEngine.ParticleSystem.EmitParams, count: number): void;
    // properties
    startDelay: number;
    readonly isPlaying: boolean;
    readonly isEmitting: boolean;
    readonly isStopped: boolean;
    readonly isPaused: boolean;
    loop: boolean;
    playOnAwake: boolean;
    time: number;
    readonly duration: number;
    playbackSpeed: number;
    readonly particleCount: number;
    enableEmission: boolean;
    emissionRate: number;
    startSpeed: number;
    startSize: number;
    startColor: UnityEngine.Color;
    startRotation: number;
    startRotation3D: UnityEngine.Vector3;
    startLifetime: number;
    gravityModifier: number;
    maxParticles: number;
    simulationSpace: UnityEngine.ParticleSystemSimulationSpace;
    scalingMode: UnityEngine.ParticleSystemScalingMode;
    randomSeed: number;
    useAutoRandomSeed: boolean;
    readonly main: UnityEngine.ParticleSystem.MainModule;
    readonly emission: UnityEngine.ParticleSystem.EmissionModule;
    readonly shape: UnityEngine.ParticleSystem.ShapeModule;
    readonly velocityOverLifetime: UnityEngine.ParticleSystem.VelocityOverLifetimeModule;
    readonly limitVelocityOverLifetime: UnityEngine.ParticleSystem.LimitVelocityOverLifetimeModule;
    readonly inheritVelocity: UnityEngine.ParticleSystem.InheritVelocityModule;
    readonly forceOverLifetime: UnityEngine.ParticleSystem.ForceOverLifetimeModule;
    readonly colorOverLifetime: UnityEngine.ParticleSystem.ColorOverLifetimeModule;
    readonly colorBySpeed: UnityEngine.ParticleSystem.ColorBySpeedModule;
    readonly sizeOverLifetime: UnityEngine.ParticleSystem.SizeOverLifetimeModule;
    readonly sizeBySpeed: UnityEngine.ParticleSystem.SizeBySpeedModule;
    readonly rotationOverLifetime: UnityEngine.ParticleSystem.RotationOverLifetimeModule;
    readonly rotationBySpeed: UnityEngine.ParticleSystem.RotationBySpeedModule;
    readonly externalForces: UnityEngine.ParticleSystem.ExternalForcesModule;
    readonly noise: UnityEngine.ParticleSystem.NoiseModule;
    readonly collision: UnityEngine.ParticleSystem.CollisionModule;
    readonly trigger: UnityEngine.ParticleSystem.TriggerModule;
    readonly subEmitters: UnityEngine.ParticleSystem.SubEmittersModule;
    readonly textureSheetAnimation: UnityEngine.ParticleSystem.TextureSheetAnimationModule;
    readonly lights: UnityEngine.ParticleSystem.LightsModule;
    readonly trails: UnityEngine.ParticleSystem.TrailModule;
    readonly safeCollisionEventSize: number;
    // fields
  }
}
