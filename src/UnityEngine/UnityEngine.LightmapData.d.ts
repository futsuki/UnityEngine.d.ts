declare namespace UnityEngine {
  class LightmapData {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    lightmapLight: UnityEngine.Texture2D;
    lightmapDir: UnityEngine.Texture2D;
    lightmap: UnityEngine.Texture2D;
    lightmapFar: UnityEngine.Texture2D;
    lightmapNear: UnityEngine.Texture2D;
    // fields
  }
}
