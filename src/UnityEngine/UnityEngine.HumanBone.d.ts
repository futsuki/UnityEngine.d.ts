declare namespace UnityEngine {
  class HumanBone {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    boneName: string;
    humanName: string;
    // fields
    limit: UnityEngine.HumanLimit;
  }
}
