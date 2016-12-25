declare namespace UnityEngine.Sprites {
  class DataUtility {
    // constructors
    constructor();
    // methods
    static GetInnerUV(sprite: UnityEngine.Sprite): UnityEngine.Vector4;
    static GetOuterUV(sprite: UnityEngine.Sprite): UnityEngine.Vector4;
    static GetPadding(sprite: UnityEngine.Sprite): UnityEngine.Vector4;
    static GetMinSize(sprite: UnityEngine.Sprite): UnityEngine.Vector2;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
