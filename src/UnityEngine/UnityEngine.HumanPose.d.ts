declare namespace UnityEngine {
  class HumanPose {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    bodyPosition: UnityEngine.Vector3;
    bodyRotation: UnityEngine.Quaternion;
    muscles: number[];
  }
}
