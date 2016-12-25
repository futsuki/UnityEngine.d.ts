declare namespace UnityEditor {
  class ViewTool {
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
    static None: UnityEditor.ViewTool;
    static Orbit: UnityEditor.ViewTool;
    static Pan: UnityEditor.ViewTool;
    static Zoom: UnityEditor.ViewTool;
    static FPS: UnityEditor.ViewTool;
  }
}
