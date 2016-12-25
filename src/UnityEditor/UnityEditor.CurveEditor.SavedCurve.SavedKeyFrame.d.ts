declare namespace UnityEditor.CurveEditor.SavedCurve {
  class SavedKeyFrame {
    // constructors
    constructor(key: any, selected: UnityEditor.CurveWrapper.SelectionMode);
    // methods
    CompareTo(_other: any): number;
    Clone(): UnityEditor.CurveEditor.SavedCurve.SavedKeyFrame;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    key: any;
    selected: UnityEditor.CurveWrapper.SelectionMode;
  }
}
