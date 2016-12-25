declare namespace UnityEngine {
  class HumanLimit {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    useDefaultValues: boolean;
    min: UnityEngine.Vector3;
    max: UnityEngine.Vector3;
    center: UnityEngine.Vector3;
    axisLength: number;
    // fields
  }
}
