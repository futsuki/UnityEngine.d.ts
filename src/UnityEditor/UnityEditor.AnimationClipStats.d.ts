declare namespace UnityEditor {
  class AnimationClipStats {
    // constructors
    private constructor();
    // methods
    Reset(): void;
    Combine(other: UnityEditor.AnimationClipStats): void;
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
