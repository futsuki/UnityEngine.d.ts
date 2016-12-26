declare namespace UnityEditor {
  class DetailPainter {
    // constructors
    constructor();
    // methods
    Paint(xCenterNormalized: number, yCenterNormalized: number, detailIndex: number): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    size: number;
    opacity: number;
    targetStrength: number;
    brush: UnityEditor.Brush;
    terrainData: any;
    tool: UnityEditor.TerrainTool;
    randomizeDetails: boolean;
    clearSelectedOnly: boolean;
  }
}
