declare namespace UnityEditor {
  class AnimationWindowEventInspector extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    OnInspectorGUI(): void;
    static OnEditAnimationEvent(awevt: UnityEditor.AnimationWindowEvent): void;
    static OnDisabledAnimationEvent(): void;
    static CollectSupportedMethods(awevt: UnityEditor.AnimationWindowEvent): UnityEditor.AnimationWindowEventMethod[];
    static FormatEvent(root: any, evt: any): string;
    // properties
    // fields
  }
}
