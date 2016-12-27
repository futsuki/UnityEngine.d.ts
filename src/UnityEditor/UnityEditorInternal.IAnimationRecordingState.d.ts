declare namespace UnityEditorInternal {
  class IAnimationRecordingState {
    // constructors
    protected constructor();
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
