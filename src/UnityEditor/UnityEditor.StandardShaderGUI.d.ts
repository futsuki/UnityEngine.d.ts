declare namespace UnityEditor {
  class StandardShaderGUI {
    // constructors
    constructor();
    // methods
    FindProperties(props: UnityEditor.MaterialProperty[]): void;
    OnGUI(materialEditor: UnityEditor.MaterialEditor, props: UnityEditor.MaterialProperty[]): void;
    ShaderPropertiesGUI(material: any): void;
    AssignNewShaderToMaterial(material: any, oldShader: any, newShader: any): void;
    static SetupMaterialWithBlendMode(material: any, blendMode: UnityEditor.StandardShaderGUI.BlendMode): void;
    OnMaterialPreviewGUI(materialEditor: UnityEditor.MaterialEditor, r: any, background: any): void;
    OnMaterialInteractivePreviewGUI(materialEditor: UnityEditor.MaterialEditor, r: any, background: any): void;
    OnMaterialPreviewSettingsGUI(materialEditor: UnityEditor.MaterialEditor): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
