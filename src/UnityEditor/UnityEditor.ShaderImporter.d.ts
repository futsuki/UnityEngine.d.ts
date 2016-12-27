declare namespace UnityEditor {
  class ShaderImporter extends UnityEditor.AssetImporter {
    // constructors
    constructor();
    // methods
    GetShader(): any;
    SetDefaultTextures(name: string[], textures: any[]): void;
    GetDefaultTexture(name: string): any;
    // properties
    // fields
  }
}
