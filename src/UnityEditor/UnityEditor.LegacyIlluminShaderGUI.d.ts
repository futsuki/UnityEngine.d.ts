declare namespace UnityEditor {
  class LegacyIlluminShaderGUI {
    // constructors
    constructor();
    // methods
    OnGUI(materialEditor: UnityEditor.MaterialEditor, props: UnityEditor.MaterialProperty[]): void;
    OnMaterialPreviewGUI(materialEditor: UnityEditor.MaterialEditor, r: any, background: any): void;
    OnMaterialInteractivePreviewGUI(materialEditor: UnityEditor.MaterialEditor, r: any, background: any): void;
    OnMaterialPreviewSettingsGUI(materialEditor: UnityEditor.MaterialEditor): void;
    AssignNewShaderToMaterial(material: any, oldShader: any, newShader: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
