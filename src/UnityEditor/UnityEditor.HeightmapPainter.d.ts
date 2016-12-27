declare namespace UnityEditor {
  class HeightmapPainter extends System.Object {
    // constructors
    constructor();
    // methods
    PaintHeight(xCenterNormalized: number, yCenterNormalized: number): void;
    // properties
    // fields
    size: number;
    strength: number;
    targetHeight: number;
    tool: UnityEditor.TerrainTool;
    brush: UnityEditor.Brush;
    terrainData: any;
  }
}
