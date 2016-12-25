declare namespace UnityEditor {
  class UndoSnapshot {
    // constructors
    constructor(objectsToUndo: any[]);
    // methods
    Restore(): any;
    Dispose(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
