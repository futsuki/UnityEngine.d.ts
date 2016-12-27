declare namespace UnityEditor {
  class DetailPainter extends System.Object {
    // constructors
    constructor();
    // methods
    Paint(xCenterNormalized: number, yCenterNormalized: number, detailIndex: number): void;
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
