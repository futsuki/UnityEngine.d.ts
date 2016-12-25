declare namespace UnityEditor.TransitionPreview {
  class TransitionInfo {
    // constructors
    constructor();
    // methods
    IsEqual(info: UnityEditor.TransitionPreview.TransitionInfo): boolean;
    Set(transition: UnityEditor.Animations.AnimatorStateTransition, srcState: UnityEditor.Animations.AnimatorState, dstState: UnityEditor.Animations.AnimatorState): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
