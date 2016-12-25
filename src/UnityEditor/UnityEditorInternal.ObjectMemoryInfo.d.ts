declare namespace UnityEditorInternal {
  class ObjectMemoryInfo {
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
    count: number;
    reason: number;
    name: string;
    className: string;
  }
}
