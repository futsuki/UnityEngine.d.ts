declare namespace UnityEditor.Timeline {
  class DragStates {
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
    static None: UnityEditor.Timeline.DragStates;
    static LeftSelection: UnityEditor.Timeline.DragStates;
    static RightSelection: UnityEditor.Timeline.DragStates;
    static FullSelection: UnityEditor.Timeline.DragStates;
    static Destination: UnityEditor.Timeline.DragStates;
    static Source: UnityEditor.Timeline.DragStates;
    static Playhead: UnityEditor.Timeline.DragStates;
    static TimeArea: UnityEditor.Timeline.DragStates;
  }
}
