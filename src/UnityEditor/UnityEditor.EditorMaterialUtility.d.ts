declare namespace UnityEditor {
  class EditorMaterialUtility extends System.Object {
    // constructors
    constructor();
    // methods
    static ResetDefaultTextures(material: any, overrideSetTextures: boolean): void;
    static IsBackgroundMaterial(material: any): boolean;
    static SetShaderDefaults(shader: any, name: string[], textures: any[]): void;
    // properties
    // fields
  }
}
