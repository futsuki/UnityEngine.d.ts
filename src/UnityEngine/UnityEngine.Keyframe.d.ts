declare namespace UnityEngine {
  class Keyframe {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    time: number;
    value: number;
    inTangent: number;
    outTangent: number;
    tangentMode: number;
    // fields
  }
}
