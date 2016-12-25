declare namespace UnityEditor.AvatarEditor {
  class SceneStateCache {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    view: UnityEditor.SceneView;
    state: UnityEditor.SceneView.SceneViewState;
  }
}
