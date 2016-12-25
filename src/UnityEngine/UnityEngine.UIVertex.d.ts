declare namespace UnityEngine {
  class UIVertex {
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
    normal: UnityEngine.Vector3;
    color: UnityEngine.Color32;
    uv0: UnityEngine.Vector2;
    uv1: UnityEngine.Vector2;
    tangent: UnityEngine.Vector4;
    static simpleVert: UnityEngine.UIVertex;
  }
}
