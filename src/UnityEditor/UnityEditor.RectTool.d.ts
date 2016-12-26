declare namespace UnityEditor {
  class RectTool {
    // constructors
    constructor();
    // methods
    static OnGUI(view: UnityEditor.SceneView): void;
    static GetLocalRectPoint(rect: any, index: number): any;
    ToolGUI(view: UnityEditor.SceneView, handlePosition: any, isStatic: boolean): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
