declare namespace UnityEngine {
  class SplatPrototype {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    texture: UnityEngine.Texture2D;
    normalMap: UnityEngine.Texture2D;
    tileSize: UnityEngine.Vector2;
    tileOffset: UnityEngine.Vector2;
    specular: UnityEngine.Color;
    metallic: number;
    smoothness: number;
    // fields
  }
}
