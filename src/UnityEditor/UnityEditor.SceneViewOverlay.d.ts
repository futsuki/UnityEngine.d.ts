declare namespace UnityEditor {
  class SceneViewOverlay {
    // constructors
    constructor(sceneView: UnityEditor.SceneView);
    // methods
    Begin(): any;
    End(): any;
    static Window(title: any, sceneViewFunc: UnityEditor.SceneViewOverlay.WindowFunction, order: number, option: UnityEditor.SceneViewOverlay.WindowDisplayOption): any;
    static Window(title: any, sceneViewFunc: UnityEditor.SceneViewOverlay.WindowFunction, order: number, target: any, option: UnityEditor.SceneViewOverlay.WindowDisplayOption): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
