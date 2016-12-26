declare namespace UnityEditor.SceneView {
  class SceneViewState {
    // constructors
    constructor();
    constructor(other: UnityEditor.SceneView.SceneViewState);
    // methods
    IsAllOn(): boolean;
    Toggle(value: boolean): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    showFog: boolean;
    showMaterialUpdate: boolean;
    showSkybox: boolean;
    showFlares: boolean;
    showImageEffects: boolean;
  }
}
