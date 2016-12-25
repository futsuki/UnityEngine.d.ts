declare namespace UnityEditorInternal {
  class ObjectMemoryStackInfo {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    expanded: boolean;
    sorted: boolean;
    allocated: number;
    ownedAllocated: number;
    callerSites: UnityEditorInternal.ObjectMemoryStackInfo[];
    name: string;
  }
}
