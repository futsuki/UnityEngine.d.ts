declare namespace UnityEditor {
  class HeightmapPainter {
    // constructors
    constructor();
    // methods
    PaintHeight(xCenterNormalized: number, yCenterNormalized: number): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
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
