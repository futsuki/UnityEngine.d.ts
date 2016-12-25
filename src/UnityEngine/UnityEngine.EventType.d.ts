declare namespace UnityEngine {
  class EventType {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static MouseDown: UnityEngine.EventType;
    static MouseUp: UnityEngine.EventType;
    static MouseMove: UnityEngine.EventType;
    static MouseDrag: UnityEngine.EventType;
    static KeyDown: UnityEngine.EventType;
    static KeyUp: UnityEngine.EventType;
    static ScrollWheel: UnityEngine.EventType;
    static Repaint: UnityEngine.EventType;
    static Layout: UnityEngine.EventType;
    static DragUpdated: UnityEngine.EventType;
    static DragPerform: UnityEngine.EventType;
    static DragExited: UnityEngine.EventType;
    static Ignore: UnityEngine.EventType;
    static Used: UnityEngine.EventType;
    static ValidateCommand: UnityEngine.EventType;
    static ExecuteCommand: UnityEngine.EventType;
    static ContextClick: UnityEngine.EventType;
    static mouseDown: UnityEngine.EventType;
    static mouseUp: UnityEngine.EventType;
    static mouseMove: UnityEngine.EventType;
    static mouseDrag: UnityEngine.EventType;
    static keyDown: UnityEngine.EventType;
    static keyUp: UnityEngine.EventType;
    static scrollWheel: UnityEngine.EventType;
    static repaint: UnityEngine.EventType;
    static layout: UnityEngine.EventType;
    static dragUpdated: UnityEngine.EventType;
    static dragPerform: UnityEngine.EventType;
    static ignore: UnityEngine.EventType;
    static used: UnityEngine.EventType;
  }
}
