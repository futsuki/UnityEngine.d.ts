declare namespace UnityEditor {
  class SplatPainter {
    // constructors
    constructor();
    // methods
    Paint(xCenterNormalized: number, yCenterNormalized: number, splatIndex: number): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
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
