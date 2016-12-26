declare namespace UnityEditor {
  class EditorMaterialUtility {
    // constructors
    constructor();
    // methods
    static ResetDefaultTextures(material: any, overrideSetTextures: boolean): void;
    static IsBackgroundMaterial(material: any): boolean;
    static SetShaderDefaults(shader: any, name: string[], textures: any[]): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
