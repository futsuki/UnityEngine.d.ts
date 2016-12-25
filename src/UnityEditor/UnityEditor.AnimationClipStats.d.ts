declare namespace UnityEditor {
  class AnimationClipStats {
    // constructors
    private constructor();
    // methods
    Reset(): any;
    Combine(other: UnityEditor.AnimationClipStats): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
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
