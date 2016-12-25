declare namespace UnityEditor.Sprites {
  class SpriteUtility {
    // constructors
    constructor();
    // methods
    static GetSpriteTexture(sprite: any, getAtlasData: boolean): any;
    static GetSpriteMesh(sprite: any, getAtlasData: boolean): any[];
    static GetSpriteUVs(sprite: any, getAtlasData: boolean): any[];
    static GetSpriteIndices(sprite: any, getAtlasData: boolean): number[];
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
