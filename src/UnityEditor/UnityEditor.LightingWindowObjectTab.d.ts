declare namespace UnityEditor {
  class LightingWindowObjectTab {
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
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
