declare namespace UnityEngine {
  class InternalDrawTextureArguments {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    screenRect: UnityEngine.Rect;
    texture: UnityEngine.Texture;
    sourceRect: UnityEngine.Rect;
    leftBorder: number;
    rightBorder: number;
    topBorder: number;
    bottomBorder: number;
    color: UnityEngine.Color32;
    mat: UnityEngine.Material;
    pass: number;
  }
}
