declare namespace UnityEditor {
  class ClothInspector extends UnityEditor.Editor {
    // constructors
    constructor();
    // methods
    OnInspectorGUI(): void;
    OnSceneGUI(): void;
    VisualizationMenuSetMaxDistanceMode(): void;
    VisualizationMenuSetCollisionSphereMode(): void;
    VisualizationMenuToggleManipulateBackfaces(): void;
    DrawColorBox(gradientTex: any, col: any): void;
    // properties
    readonly editing: boolean;
    // fields
  }
}
