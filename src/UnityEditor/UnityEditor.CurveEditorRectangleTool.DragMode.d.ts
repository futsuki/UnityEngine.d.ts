declare namespace UnityEditor.CurveEditorRectangleTool {
  class DragMode {
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
    static None: UnityEditor.CurveEditorRectangleTool.DragMode;
    static MoveHorizontal: UnityEditor.CurveEditorRectangleTool.DragMode;
    static MoveVertical: UnityEditor.CurveEditorRectangleTool.DragMode;
    static MoveBothAxis: UnityEditor.CurveEditorRectangleTool.DragMode;
    static ScaleHorizontal: UnityEditor.CurveEditorRectangleTool.DragMode;
    static ScaleVertical: UnityEditor.CurveEditorRectangleTool.DragMode;
    static ScaleBothAxis: UnityEditor.CurveEditorRectangleTool.DragMode;
    static MoveScaleHorizontal: UnityEditor.CurveEditorRectangleTool.DragMode;
    static MoveScaleVertical: UnityEditor.CurveEditorRectangleTool.DragMode;
  }
}
