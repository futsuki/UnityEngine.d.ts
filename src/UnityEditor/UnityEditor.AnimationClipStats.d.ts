declare namespace UnityEditor {
  class AnimationClipStats extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    Reset(): void;
    Combine(other: UnityEditor.AnimationClipStats): void;
    // properties
    // fields
    size: number;
    positionCurves: number;
    quaternionCurves: number;
    eulerCurves: number;
    scaleCurves: number;
    muscleCurves: number;
    genericCurves: number;
    pptrCurves: number;
    totalCurves: number;
    constantCurves: number;
    denseCurves: number;
    streamCurves: number;
  }
}
