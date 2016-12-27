declare namespace UnityEditor {
  class MuscleClipEditorUtilities extends System.Object {
    // constructors
    constructor();
    // methods
    static GetMuscleClipQualityInfo(clip: any, startTime: number, stopTime: number): UnityEditor.MuscleClipQualityInfo;
    static CalculateQualityCurves(clip: any, time: UnityEditor.QualityCurvesTime, poseCurve: any[], rotationCurve: any[], heightCurve: any[], positionCurve: any[]): void;
    // properties
    // fields
  }
}
