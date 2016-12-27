declare namespace UnityEditor {
  class RectTool extends UnityEditor.ManipulationTool {
    // constructors
    constructor();
    // methods
    static OnGUI(view: UnityEditor.SceneView): void;
    static GetLocalRectPoint(rect: any, index: number): any;
    ToolGUI(view: UnityEditor.SceneView, handlePosition: any, isStatic: boolean): void;
    // properties
    // fields
  }
}
