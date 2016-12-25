declare namespace UnityEngine {
  class AnimationCurve {
    // constructors
    constructor(keys: UnityEngine.Keyframe[]);
    constructor();
    // methods
    Evaluate(time: number): number;
    AddKey(time: number, value: number): number;
    AddKey(key: UnityEngine.Keyframe): number;
    MoveKey(index: number, key: UnityEngine.Keyframe): number;
    RemoveKey(index: number): any;
    SmoothTangents(index: number, weight: number): any;
    static Linear(timeStart: number, valueStart: number, timeEnd: number, valueEnd: number): UnityEngine.AnimationCurve;
    static EaseInOut(timeStart: number, valueStart: number, timeEnd: number, valueEnd: number): UnityEngine.AnimationCurve;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    keys: UnityEngine.Keyframe[];
    get_Item(index: number): UnityEngine.Keyframe;
    readonly length: number;
    preWrapMode: UnityEngine.WrapMode;
    postWrapMode: UnityEngine.WrapMode;
    // fields
  }
}
