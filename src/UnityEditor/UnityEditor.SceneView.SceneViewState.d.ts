declare namespace UnityEditor.SceneView {
  class SceneViewState extends System.Object {
    // constructors
    constructor();
    constructor(other: UnityEditor.SceneView.SceneViewState);
    // methods
    IsAllOn(): boolean;
    Toggle(value: boolean): void;
    // properties
    // fields
    showFog: boolean;
    showMaterialUpdate: boolean;
    showSkybox: boolean;
    showFlares: boolean;
    showImageEffects: boolean;
  }
}
