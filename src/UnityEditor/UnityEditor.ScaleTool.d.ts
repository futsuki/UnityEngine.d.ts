declare namespace UnityEditor {
  class ScaleTool {
    // constructors
    constructor();
    // methods
    static OnGUI(view: UnityEditor.SceneView): any;
    ToolGUI(view: UnityEditor.SceneView, handlePosition: any, isStatic: boolean): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
