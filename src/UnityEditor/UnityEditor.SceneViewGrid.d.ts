declare namespace UnityEditor {
  class SceneViewGrid extends System.Object {
    // constructors
    constructor();
    // methods
    Register(source: UnityEditor.SceneView): void;
    PrepareGridRender(camera: any, pivot: any, rotation: any, size: number, orthoMode: boolean, gridVisible: boolean): UnityEditor.DrawGridParameters;
    // properties
    // fields
  }
}
