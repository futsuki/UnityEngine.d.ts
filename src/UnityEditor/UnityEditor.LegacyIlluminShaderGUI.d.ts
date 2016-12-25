declare namespace UnityEditor {
  class LegacyIlluminShaderGUI {
    // constructors
    constructor();
    // methods
    OnGUI(materialEditor: UnityEditor.MaterialEditor, props: UnityEditor.MaterialProperty[]): any;
    OnMaterialPreviewGUI(materialEditor: UnityEditor.MaterialEditor, r: any, background: any): any;
    OnMaterialInteractivePreviewGUI(materialEditor: UnityEditor.MaterialEditor, r: any, background: any): any;
    OnMaterialPreviewSettingsGUI(materialEditor: UnityEditor.MaterialEditor): any;
    AssignNewShaderToMaterial(material: any, oldShader: any, newShader: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
