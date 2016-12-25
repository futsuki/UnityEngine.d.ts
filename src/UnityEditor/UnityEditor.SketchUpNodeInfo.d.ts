declare namespace UnityEditor {
  class SketchUpNodeInfo {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    name: string;
    parent: number;
    enabled: boolean;
    nodeIndex: number;
  }
}
