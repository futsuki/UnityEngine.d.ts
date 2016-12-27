declare namespace UnityEditor {
  class ShaderGUI extends System.Object {
    // constructors
    protected constructor();
    // methods
    OnGUI(materialEditor: UnityEditor.MaterialEditor, properties: UnityEditor.MaterialProperty[]): void;
    OnMaterialPreviewGUI(materialEditor: UnityEditor.MaterialEditor, r: any, background: any): void;
    OnMaterialInteractivePreviewGUI(materialEditor: UnityEditor.MaterialEditor, r: any, background: any): void;
    OnMaterialPreviewSettingsGUI(materialEditor: UnityEditor.MaterialEditor): void;
    AssignNewShaderToMaterial(material: any, oldShader: any, newShader: any): void;
    // properties
    // fields
  }
}
