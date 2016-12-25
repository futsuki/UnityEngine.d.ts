declare namespace UnityEditor.Animations {
  class PushUndoIfNeeded {
    // constructors
    private constructor();
    // methods
    DoUndo(target: any, undoOperation: string): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    pushUndo: boolean;
    // fields
  }
}
