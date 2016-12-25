declare namespace UnityEngine {
  class TreeInstance {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    position: UnityEngine.Vector3;
    widthScale: number;
    heightScale: number;
    rotation: number;
    color: UnityEngine.Color32;
    lightmapColor: UnityEngine.Color32;
    prototypeIndex: number;
  }
}
