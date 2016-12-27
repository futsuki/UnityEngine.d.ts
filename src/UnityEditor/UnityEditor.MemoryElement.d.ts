declare namespace UnityEditor {
  class MemoryElement extends System.Object {
    // constructors
    constructor();
    constructor(n: string);
    constructor(memInfo: UnityEditor.ObjectInfo, finalize: boolean);
    constructor(n: string, groups: UnityEditor.MemoryElement[]);
    // methods
    ExpandChildren(): void;
    AccumulatedChildCount(): number;
    ChildCount(): number;
    ReferenceCount(): number;
    AddChild(node: UnityEditor.MemoryElement): void;
    GetChildIndexInList(): number;
    GetPrevNode(): UnityEditor.MemoryElement;
    GetNextNode(): UnityEditor.MemoryElement;
    GetRoot(): UnityEditor.MemoryElement;
    FirstChild(): UnityEditor.MemoryElement;
    LastChild(): UnityEditor.MemoryElement;
    // properties
    // fields
    children: UnityEditor.MemoryElement[];
    parent: UnityEditor.MemoryElement;
    memoryInfo: UnityEditor.ObjectInfo;
    totalMemory: number;
    totalChildCount: number;
    name: string;
    expanded: boolean;
    description: string;
  }
}
