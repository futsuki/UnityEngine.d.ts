declare namespace UnityEngine {
  class GUIDebugger {
    // constructors
    constructor();
    // methods
    static LogLayoutEntry(rect: UnityEngine.Rect, margins: UnityEngine.RectOffset, style: UnityEngine.GUIStyle): any;
    static LogLayoutGroupEntry(rect: UnityEngine.Rect, margins: UnityEngine.RectOffset, style: UnityEngine.GUIStyle, isVertical: boolean): any;
    static LogLayoutEndGroup(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
