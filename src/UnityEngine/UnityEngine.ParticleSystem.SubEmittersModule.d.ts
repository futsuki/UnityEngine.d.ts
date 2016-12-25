declare namespace UnityEngine.ParticleSystem {
  class SubEmittersModule {
    // constructors
    private constructor();
    // methods
    AddSubEmitter(subEmitter: UnityEngine.ParticleSystem, type: UnityEngine.ParticleSystemSubEmitterType, properties: UnityEngine.ParticleSystemSubEmitterProperties): any;
    RemoveSubEmitter(index: number): any;
    SetSubEmitterSystem(index: number, subEmitter: UnityEngine.ParticleSystem): any;
    SetSubEmitterType(index: number, type: UnityEngine.ParticleSystemSubEmitterType): any;
    SetSubEmitterProperties(index: number, properties: UnityEngine.ParticleSystemSubEmitterProperties): any;
    GetSubEmitterSystem(index: number): UnityEngine.ParticleSystem;
    GetSubEmitterType(index: number): UnityEngine.ParticleSystemSubEmitterType;
    GetSubEmitterProperties(index: number): UnityEngine.ParticleSystemSubEmitterProperties;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    enabled: boolean;
    readonly subEmittersCount: number;
    birth0: UnityEngine.ParticleSystem;
    birth1: UnityEngine.ParticleSystem;
    collision0: UnityEngine.ParticleSystem;
    collision1: UnityEngine.ParticleSystem;
    death0: UnityEngine.ParticleSystem;
    death1: UnityEngine.ParticleSystem;
    // fields
  }
}
