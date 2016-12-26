declare namespace UnityEngine {
  class GUIDebugger {
    // constructors
    constructor();
    // methods
    static LogLayoutEntry(rect: UnityEngine.Rect, margins: UnityEngine.RectOffset, style: UnityEngine.GUIStyle): void;
    static LogLayoutGroupEntry(rect: UnityEngine.Rect, margins: UnityEngine.RectOffset, style: UnityEngine.GUIStyle, isVertical: boolean): void;
    static LogLayoutEndGroup(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
