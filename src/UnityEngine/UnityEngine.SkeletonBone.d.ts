declare namespace UnityEngine {
  class SkeletonBone {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    transformModified: number;
    // fields
    name: string;
    position: UnityEngine.Vector3;
    rotation: UnityEngine.Quaternion;
    scale: UnityEngine.Vector3;
  }
}
