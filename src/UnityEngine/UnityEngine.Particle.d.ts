declare namespace UnityEngine {
  class Particle {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    position: UnityEngine.Vector3;
    velocity: UnityEngine.Vector3;
    energy: number;
    startEnergy: number;
    size: number;
    rotation: number;
    angularVelocity: number;
    color: UnityEngine.Color;
    // fields
  }
}
