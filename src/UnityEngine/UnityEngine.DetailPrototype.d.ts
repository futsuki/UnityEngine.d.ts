declare namespace UnityEngine {
  class DetailPrototype {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    prototype: UnityEngine.GameObject;
    prototypeTexture: UnityEngine.Texture2D;
    minWidth: number;
    maxWidth: number;
    minHeight: number;
    maxHeight: number;
    noiseSpread: number;
    bendFactor: number;
    healthyColor: UnityEngine.Color;
    dryColor: UnityEngine.Color;
    renderMode: UnityEngine.DetailRenderMode;
    usePrototypeMesh: boolean;
    // fields
  }
}
