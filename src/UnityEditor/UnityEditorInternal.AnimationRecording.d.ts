declare namespace UnityEditorInternal {
  class AnimationRecording extends System.Object {
    // constructors
    constructor();
    // methods
    static Process(state: UnityEditorInternal.IAnimationRecordingState, modifications: UnityEditor.UndoPropertyModification[]): UnityEditor.UndoPropertyModification[];
    static SaveModifiedCurve(curve: UnityEditorInternal.AnimationWindowCurve, clip: any): void;
    // properties
    // fields
  }
}
