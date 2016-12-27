declare namespace UnityEditor {
  class AnimationWindowEvent extends UnityEngine.ScriptableObject {
    // constructors
    constructor();
    // methods
    static CreateAndEdit(root: any, clip: any, time: number): UnityEditor.AnimationWindowEvent;
    static Edit(root: any, clip: any, eventIndex: number): UnityEditor.AnimationWindowEvent;
    static Edit(clipInfo: UnityEditor.AnimationClipInfoProperties, eventIndex: number): UnityEditor.AnimationWindowEvent;
    // properties
    // fields
    root: any;
    clip: any;
    clipInfo: UnityEditor.AnimationClipInfoProperties;
    eventIndex: number;
  }
}
