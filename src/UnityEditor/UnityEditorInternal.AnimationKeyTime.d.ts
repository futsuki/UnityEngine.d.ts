declare namespace UnityEditorInternal {
  class AnimationKeyTime extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    static Time(time: number, frameRate: number): UnityEditorInternal.AnimationKeyTime;
    static Frame(frame: number, frameRate: number): UnityEditorInternal.AnimationKeyTime;
    ContainsTime(time: number): boolean;
    // properties
    readonly time: number;
    readonly frame: number;
    readonly frameRate: number;
    readonly frameFloor: number;
    readonly frameCeiling: number;
    // fields
  }
}
