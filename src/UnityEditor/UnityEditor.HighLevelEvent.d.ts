declare namespace UnityEditor {
  class HighLevelEvent {
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
    static None: UnityEditor.HighLevelEvent;
    static Click: UnityEditor.HighLevelEvent;
    static DoubleClick: UnityEditor.HighLevelEvent;
    static ContextClick: UnityEditor.HighLevelEvent;
    static BeginDrag: UnityEditor.HighLevelEvent;
    static Drag: UnityEditor.HighLevelEvent;
    static EndDrag: UnityEditor.HighLevelEvent;
    static Delete: UnityEditor.HighLevelEvent;
    static SelectionChanged: UnityEditor.HighLevelEvent;
  }
}
