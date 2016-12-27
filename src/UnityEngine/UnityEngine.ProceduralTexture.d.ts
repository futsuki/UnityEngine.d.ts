declare namespace UnityEngine {
  class ProceduralTexture extends UnityEngine.Texture {
    // constructors
    constructor();
    // methods
    GetProceduralOutputType(): UnityEngine.ProceduralOutputType;
    GetPixels32(x: number, y: number, blockWidth: number, blockHeight: number): UnityEngine.Color32[];
    // properties
    readonly hasAlpha: boolean;
    readonly format: UnityEngine.TextureFormat;
    // fields
  }
}
