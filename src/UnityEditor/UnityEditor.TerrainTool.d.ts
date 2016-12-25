declare namespace UnityEditor {
  class TerrainTool {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static None: UnityEditor.TerrainTool;
    static PaintHeight: UnityEditor.TerrainTool;
    static SetHeight: UnityEditor.TerrainTool;
    static SmoothHeight: UnityEditor.TerrainTool;
    static PaintTexture: UnityEditor.TerrainTool;
    static PlaceTree: UnityEditor.TerrainTool;
    static PaintDetail: UnityEditor.TerrainTool;
    static TerrainSettings: UnityEditor.TerrainTool;
    static TerrainToolCount: UnityEditor.TerrainTool;
  }
}
