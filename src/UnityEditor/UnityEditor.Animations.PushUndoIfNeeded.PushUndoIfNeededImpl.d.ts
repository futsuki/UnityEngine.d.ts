declare namespace UnityEditor.Animations.PushUndoIfNeeded {
  class PushUndoIfNeededImpl extends System.Object {
    // constructors
    constructor(pushUndo: boolean);
    // methods
    DoUndo(target: UnityEngine.Object, undoOperation: string): void;
    // properties
    // fields
    m_PushUndo: boolean;
  }
}
