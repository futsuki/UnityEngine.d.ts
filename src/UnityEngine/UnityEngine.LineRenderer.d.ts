declare namespace UnityEngine {
  class LineRenderer extends UnityEngine.Renderer {
    // constructors
    constructor();
    // methods
    SetWidth(start: number, end: number): void;
    SetColors(start: UnityEngine.Color, end: UnityEngine.Color): void;
    SetVertexCount(count: number): void;
    SetPosition(index: number, position: UnityEngine.Vector3): void;
    GetPosition(index: number): UnityEngine.Vector3;
    SetPositions(positions: UnityEngine.Vector3[]): void;
    GetPositions(positions: UnityEngine.Vector3[]): number;
    // properties
    startWidth: number;
    endWidth: number;
    widthCurve: UnityEngine.AnimationCurve;
    widthMultiplier: number;
    startColor: UnityEngine.Color;
    endColor: UnityEngine.Color;
    colorGradient: UnityEngine.Gradient;
    numPositions: number;
    useWorldSpace: boolean;
    numCornerVertices: number;
    numCapVertices: number;
    textureMode: UnityEngine.LineTextureMode;
    // fields
  }
}
