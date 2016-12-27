declare namespace UnityEditor {
  class SpriteEditorTexturePostprocessor extends UnityEditor.AssetPostprocessor {
    // constructors
    constructor();
    // methods
    GetPostprocessOrder(): number;
    OnPostprocessTexture(tex: any): void;
    // properties
    // fields
  }
}
