declare namespace UnityEditor {
  class CurveUtility {
    // constructors
    private constructor();
    // methods
    static GetPathAndTypeID(path: string, type: any): number;
    static GetIconCurve(): any;
    static GetIconKey(): any;
    static HaveKeysInRange(curve: any, beginTime: number, endTime: number): boolean;
    static RemoveKeysInRange(curve: any, beginTime: number, endTime: number): any;
    static CalculateSmoothTangent(key: any): number;
    static SetKeyModeFromContext(curve: any, keyIndex: number): any;
    static GetClipName(clip: any): string;
    static GetBalancedColor(c: any): any;
    static GetPropertyColor(name: string): any;
    // properties
    // fields
  }
}
