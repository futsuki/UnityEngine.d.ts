declare namespace UnityEditorInternal {
  class AnimationKeyTime {
    // constructors
    private constructor();
    // methods
    static Time(time: number, frameRate: number): UnityEditorInternal.AnimationKeyTime;
    static Frame(frame: number, frameRate: number): UnityEditorInternal.AnimationKeyTime;
    ContainsTime(time: number): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    readonly time: number;
    readonly frame: number;
    readonly frameRate: number;
    readonly frameFloor: number;
    readonly frameCeiling: number;
    // fields
  }
}
