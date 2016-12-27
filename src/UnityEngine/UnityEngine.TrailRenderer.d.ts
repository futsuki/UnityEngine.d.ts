declare namespace UnityEngine {
  class TrailRenderer extends UnityEngine.Renderer {
    // constructors
    constructor();
    // methods
    Clear(): void;
    // properties
    time: number;
    startWidth: number;
    endWidth: number;
    widthCurve: UnityEngine.AnimationCurve;
    widthMultiplier: number;
    startColor: UnityEngine.Color;
    endColor: UnityEngine.Color;
    colorGradient: UnityEngine.Gradient;
    autodestruct: boolean;
    numCornerVertices: number;
    numCapVertices: number;
    minVertexDistance: number;
    textureMode: UnityEngine.LineTextureMode;
    // fields
  }
}
