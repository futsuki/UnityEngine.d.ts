declare namespace UnityEditor {
  class SceneViewOverlay {
    // constructors
    constructor(sceneView: UnityEditor.SceneView);
    // methods
    Begin(): void;
    End(): void;
    static Window(title: any, sceneViewFunc: ((any, UnityEditor.SceneView) => void), order: number, option: UnityEditor.SceneViewOverlay.WindowDisplayOption): void;
    static Window(title: any, sceneViewFunc: ((any, UnityEditor.SceneView) => void), order: number, target: any, option: UnityEditor.SceneViewOverlay.WindowDisplayOption): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
