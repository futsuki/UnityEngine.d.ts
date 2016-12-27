declare namespace UnityEditor.CurveEditor.SavedCurve {
  class SavedKeyFrame extends System.Object {
    // constructors
    constructor(key: any, selected: UnityEditor.CurveWrapper.SelectionMode);
    // methods
    CompareTo(_other: any): number;
    Clone(): UnityEditor.CurveEditor.SavedCurve.SavedKeyFrame;
    // properties
    // fields
    key: any;
    selected: UnityEditor.CurveWrapper.SelectionMode;
  }
}
