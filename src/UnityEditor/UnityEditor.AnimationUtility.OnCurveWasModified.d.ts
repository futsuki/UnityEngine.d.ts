declare namespace UnityEditor.AnimationUtility {
  class OnCurveWasModified {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(clip: any, binding: UnityEditor.EditorCurveBinding, deleted: UnityEditor.AnimationUtility.CurveModifiedType): void;
    BeginInvoke(clip: any, binding: UnityEditor.EditorCurveBinding, deleted: UnityEditor.AnimationUtility.CurveModifiedType, callback: any, object: any): any;
    EndInvoke(result: any): void;
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
