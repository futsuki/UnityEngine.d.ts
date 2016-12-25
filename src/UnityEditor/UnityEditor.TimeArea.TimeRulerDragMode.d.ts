declare namespace UnityEditor.TimeArea {
  class TimeRulerDragMode {
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
    static None: UnityEditor.TimeArea.TimeRulerDragMode;
    static Start: UnityEditor.TimeArea.TimeRulerDragMode;
    static End: UnityEditor.TimeArea.TimeRulerDragMode;
    static Dragging: UnityEditor.TimeArea.TimeRulerDragMode;
    static Cancel: UnityEditor.TimeArea.TimeRulerDragMode;
  }
}
