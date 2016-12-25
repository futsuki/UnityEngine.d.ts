declare namespace UnityEditor {
  class MouseCursor {
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
    static Arrow: UnityEditor.MouseCursor;
    static Text: UnityEditor.MouseCursor;
    static ResizeVertical: UnityEditor.MouseCursor;
    static ResizeHorizontal: UnityEditor.MouseCursor;
    static Link: UnityEditor.MouseCursor;
    static SlideArrow: UnityEditor.MouseCursor;
    static ResizeUpRight: UnityEditor.MouseCursor;
    static ResizeUpLeft: UnityEditor.MouseCursor;
    static MoveArrow: UnityEditor.MouseCursor;
    static RotateArrow: UnityEditor.MouseCursor;
    static ScaleArrow: UnityEditor.MouseCursor;
    static ArrowPlus: UnityEditor.MouseCursor;
    static ArrowMinus: UnityEditor.MouseCursor;
    static Pan: UnityEditor.MouseCursor;
    static Orbit: UnityEditor.MouseCursor;
    static Zoom: UnityEditor.MouseCursor;
    static FPS: UnityEditor.MouseCursor;
    static CustomCursor: UnityEditor.MouseCursor;
    static SplitResizeUpDown: UnityEditor.MouseCursor;
    static SplitResizeLeftRight: UnityEditor.MouseCursor;
  }
}
