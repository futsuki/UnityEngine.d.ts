declare namespace UnityEngine.ParticleSystem {
  class EmitParams {
    // constructors
    private constructor();
    // methods
    ResetPosition(): void;
    ResetVelocity(): void;
    ResetAxisOfRotation(): void;
    ResetRotation(): void;
    ResetAngularVelocity(): void;
    ResetStartSize(): void;
    ResetStartColor(): void;
    ResetRandomSeed(): void;
    ResetStartLifetime(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    position: UnityEngine.Vector3;
    applyShapeToPosition: boolean;
    velocity: UnityEngine.Vector3;
    startLifetime: number;
    startSize: number;
    startSize3D: UnityEngine.Vector3;
    axisOfRotation: UnityEngine.Vector3;
    rotation: number;
    rotation3D: UnityEngine.Vector3;
    angularVelocity: number;
    angularVelocity3D: UnityEngine.Vector3;
    startColor: UnityEngine.Color32;
    randomSeed: number;
    // fields
  }
}
