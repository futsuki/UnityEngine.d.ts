declare namespace UnityEditor.Animations.PushUndoIfNeeded {
  class PushUndoIfNeededImpl {
    // constructors
    constructor(pushUndo: boolean);
    // methods
    DoUndo(target: any, undoOperation: string): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    m_PushUndo: boolean;
  }
}
