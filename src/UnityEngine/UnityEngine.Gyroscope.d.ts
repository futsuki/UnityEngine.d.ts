declare namespace UnityEngine {
  class Gyroscope extends System.Object {
    // constructors
    protected constructor();
    // methods
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
