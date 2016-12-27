declare namespace UnityEditor {
  class CurveEditorRectangleTool extends UnityEditor.RectangleTool {
    // constructors
    constructor();
    // methods
    Initialize(timeArea: UnityEditor.TimeArea): void;
    OnGUI(): void;
    OverlayOnGUI(): void;
    HandleEvents(): void;
    HandleOverlayEvents(): void;
    // properties
    // fields
  }
}
