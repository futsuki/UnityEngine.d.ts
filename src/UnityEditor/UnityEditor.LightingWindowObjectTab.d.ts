declare namespace UnityEditor {
  class LightingWindowObjectTab extends System.Object {
    // constructors
    constructor();
    // methods
    OnEnable(window: UnityEditor.EditorWindow): void;
    OnDisable(): void;
    ObjectPreview(r: any): void;
    EditLights(): boolean;
    EditLightmapParameters(): boolean;
    EditTerrains(): boolean;
    EditRenderers(): boolean;
    ObjectSettings(): void;
    static LightmapParametersGUI(prop: UnityEditor.SerializedProperty, content: any, advancedParameters: boolean): boolean;
    // properties
    // fields
  }
}
