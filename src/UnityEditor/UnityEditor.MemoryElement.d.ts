declare namespace UnityEditor {
  class MemoryElement {
    // constructors
    constructor();
    constructor(n: string);
    constructor(memInfo: UnityEditor.ObjectInfo, finalize: boolean);
    constructor(n: string, groups: any);
    // methods
    ExpandChildren(): any;
    AccumulatedChildCount(): number;
    ChildCount(): number;
    ReferenceCount(): number;
    AddChild(node: UnityEditor.MemoryElement): any;
    GetChildIndexInList(): number;
    GetPrevNode(): UnityEditor.MemoryElement;
    GetNextNode(): UnityEditor.MemoryElement;
    GetRoot(): UnityEditor.MemoryElement;
    FirstChild(): UnityEditor.MemoryElement;
    LastChild(): UnityEditor.MemoryElement;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    children: any;
    parent: UnityEditor.MemoryElement;
    memoryInfo: UnityEditor.ObjectInfo;
    totalMemory: number;
    totalChildCount: number;
    name: string;
    expanded: boolean;
    description: string;
  }
}
