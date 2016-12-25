declare namespace UnityEditor {
  class LightingWindowObjectTab {
    // constructors
    constructor();
    // methods
    OnEnable(window: UnityEditor.EditorWindow): any;
    OnDisable(): any;
    ObjectPreview(r: any): any;
    EditLights(): boolean;
    EditLightmapParameters(): boolean;
    EditTerrains(): boolean;
    EditRenderers(): boolean;
    ObjectSettings(): any;
    static LightmapParametersGUI(prop: UnityEditor.SerializedProperty, content: any, advancedParameters: boolean): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
