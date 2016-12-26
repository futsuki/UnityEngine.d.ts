declare namespace UnityEngine {
  class Gyroscope {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly rotationRate: UnityEngine.Vector3;
    readonly rotationRateUnbiased: UnityEngine.Vector3;
    readonly gravity: UnityEngine.Vector3;
    readonly userAcceleration: UnityEngine.Vector3;
    readonly attitude: UnityEngine.Quaternion;
    enabled: boolean;
    updateInterval: number;
    // fields
  }
}
