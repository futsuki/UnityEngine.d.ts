declare namespace UnityEditor {
  class ObjectInfo {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    instanceId: number;
    memorySize: number;
    reason: number;
    referencedBy: any;
    name: string;
    className: string;
  }
}
