declare namespace UnityEditor {
  class StandardShaderGUI extends UnityEditor.ShaderGUI {
    // constructors
    constructor();
    // methods
    FindProperties(props: UnityEditor.MaterialProperty[]): void;
    OnGUI(materialEditor: UnityEditor.MaterialEditor, props: UnityEditor.MaterialProperty[]): void;
    ShaderPropertiesGUI(material: any): void;
    AssignNewShaderToMaterial(material: any, oldShader: any, newShader: any): void;
    static SetupMaterialWithBlendMode(material: any, blendMode: UnityEditor.StandardShaderGUI.BlendMode): void;
    // properties
    // fields
  }
}
