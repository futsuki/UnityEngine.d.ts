declare namespace UnityEditor {
  class UndoSnapshot {
    // constructors
    constructor(objectsToUndo: any[]);
    // methods
    Restore(): void;
    Dispose(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
