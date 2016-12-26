declare namespace UnityEditor {
  class MuscleClipEditorUtilities {
    // constructors
    constructor();
    // methods
    static GetMuscleClipQualityInfo(clip: any, startTime: number, stopTime: number): UnityEditor.MuscleClipQualityInfo;
    static CalculateQualityCurves(clip: any, time: UnityEditor.QualityCurvesTime, poseCurve: any[], rotationCurve: any[], heightCurve: any[], positionCurve: any[]): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
