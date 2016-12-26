declare namespace UnityEditorInternal {
  class AnimationRecording {
    // constructors
    constructor();
    // methods
    static Process(state: UnityEditorInternal.IAnimationRecordingState, modifications: UnityEditor.UndoPropertyModification[]): UnityEditor.UndoPropertyModification[];
    static SaveModifiedCurve(curve: UnityEditorInternal.AnimationWindowCurve, clip: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
