declare namespace UnityEditor.CurveEditor.SavedCurve {
  class KeyFrameOperation {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(keyframe: UnityEditor.CurveEditor.SavedCurve.SavedKeyFrame, curve: UnityEditor.CurveEditor.SavedCurve): UnityEditor.CurveEditor.SavedCurve.SavedKeyFrame;
    BeginInvoke(keyframe: UnityEditor.CurveEditor.SavedCurve.SavedKeyFrame, curve: UnityEditor.CurveEditor.SavedCurve, callback: any, object: any): any;
    EndInvoke(result: any): UnityEditor.CurveEditor.SavedCurve.SavedKeyFrame;
    GetObjectData(info: any, context: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetInvocationList(): any[];
    DynamicInvoke(args: any[]): any;
    Clone(): any;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Method: any;
    readonly Target: any;
    // fields
  }
}
