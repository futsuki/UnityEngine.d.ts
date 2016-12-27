declare namespace UnityEditor {
  class MoveTool extends UnityEditor.ManipulationTool {
    // constructors
    constructor();
    // methods
    static OnGUI(view: UnityEditor.SceneView): void;
    ToolGUI(view: UnityEditor.SceneView, handlePosition: any, isStatic: boolean): void;
    // properties
    // fields
  }
}
