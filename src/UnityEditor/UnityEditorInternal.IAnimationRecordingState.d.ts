declare namespace UnityEditorInternal {
  class IAnimationRecordingState {
    // constructors
    private constructor();
    // methods
    SaveCurve(curve: UnityEditorInternal.AnimationWindowCurve): void;
    // properties
    readonly activeGameObject: any;
    readonly activeRootGameObject: any;
    readonly activeAnimationClip: any;
    readonly frame: number;
    // fields
  }
}
