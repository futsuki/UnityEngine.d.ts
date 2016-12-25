declare namespace UnityEditor.RectangleTool {
  class ToolCoord {
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
    static BottomLeft: UnityEditor.RectangleTool.ToolCoord;
    static Bottom: UnityEditor.RectangleTool.ToolCoord;
    static BottomRight: UnityEditor.RectangleTool.ToolCoord;
    static Left: UnityEditor.RectangleTool.ToolCoord;
    static Center: UnityEditor.RectangleTool.ToolCoord;
    static Right: UnityEditor.RectangleTool.ToolCoord;
    static TopLeft: UnityEditor.RectangleTool.ToolCoord;
    static Top: UnityEditor.RectangleTool.ToolCoord;
    static TopRight: UnityEditor.RectangleTool.ToolCoord;
  }
}
