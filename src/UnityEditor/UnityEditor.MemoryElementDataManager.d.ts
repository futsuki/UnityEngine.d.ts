declare namespace UnityEditor {
  class MemoryElementDataManager {
    // constructors
    constructor();
    // methods
    static GetTreeRoot(memoryObjectList: UnityEditorInternal.ObjectMemoryInfo[], referencesIndices: number[]): UnityEditor.MemoryElement;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
