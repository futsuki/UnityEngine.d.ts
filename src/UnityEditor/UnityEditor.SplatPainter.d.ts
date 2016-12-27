declare namespace UnityEditor {
  class SplatPainter extends System.Object {
    // constructors
    constructor();
    // methods
    Paint(xCenterNormalized: number, yCenterNormalized: number, splatIndex: number): void;
    // properties
    // fields
    size: number;
    strength: number;
    brush: UnityEditor.Brush;
    target: number;
    terrainData: any;
    tool: UnityEditor.TerrainTool;
  }
}
