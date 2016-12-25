declare namespace UnityEditor {
  class EditorMaterialUtility {
    // constructors
    constructor();
    // methods
    static ResetDefaultTextures(material: any, overrideSetTextures: boolean): any;
    static IsBackgroundMaterial(material: any): boolean;
    static SetShaderDefaults(shader: any, name: string[], textures: any[]): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
