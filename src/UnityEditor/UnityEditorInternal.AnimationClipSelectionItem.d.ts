declare namespace UnityEditorInternal {
  class AnimationClipSelectionItem extends UnityEditorInternal.AnimationWindowSelectionItem {
    // constructors
    constructor();
    // methods
    static Create(animationClip: any, sourceObject: UnityEngine.Object): UnityEditorInternal.AnimationClipSelectionItem;
    // properties
    readonly canRecord: boolean;
    readonly canChangeAnimationClip: boolean;
    readonly canSyncSceneSelection: boolean;
    // fields
  }
}
