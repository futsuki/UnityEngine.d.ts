declare namespace UnityEngine.ParticleSystem {
  class Particle extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    GetCurrentSize(system: UnityEngine.ParticleSystem): number;
    GetCurrentSize3D(system: UnityEngine.ParticleSystem): UnityEngine.Vector3;
    GetCurrentColor(system: UnityEngine.ParticleSystem): UnityEngine.Color32;
    // properties
    position: UnityEngine.Vector3;
    velocity: UnityEngine.Vector3;
    lifetime: number;
    remainingLifetime: number;
    startLifetime: number;
    startSize: number;
    startSize3D: UnityEngine.Vector3;
    axisOfRotation: UnityEngine.Vector3;
    rotation: number;
    rotation3D: UnityEngine.Vector3;
    angularVelocity: number;
    angularVelocity3D: UnityEngine.Vector3;
    startColor: UnityEngine.Color32;
    randomValue: number;
    randomSeed: number;
    size: number;
    color: UnityEngine.Color32;
    // fields
  }
}
