declare namespace UnityEditor {
  class StandardShaderGUI {
    // constructors
    constructor();
    // methods
    FindProperties(props: UnityEditor.MaterialProperty[]): any;
    OnGUI(materialEditor: UnityEditor.MaterialEditor, props: UnityEditor.MaterialProperty[]): any;
    ShaderPropertiesGUI(material: any): any;
    AssignNewShaderToMaterial(material: any, oldShader: any, newShader: any): any;
    static SetupMaterialWithBlendMode(material: any, blendMode: UnityEditor.StandardShaderGUI.BlendMode): any;
    OnMaterialPreviewGUI(materialEditor: UnityEditor.MaterialEditor, r: any, background: any): any;
    OnMaterialInteractivePreviewGUI(materialEditor: UnityEditor.MaterialEditor, r: any, background: any): any;
    OnMaterialPreviewSettingsGUI(materialEditor: UnityEditor.MaterialEditor): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
