declare namespace UnityEngine.UI.CanvasScaler {
  class ScaleMode {
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
    static ConstantPixelSize: UnityEngine.UI.CanvasScaler.ScaleMode;
    static ScaleWithScreenSize: UnityEngine.UI.CanvasScaler.ScaleMode;
    static ConstantPhysicalSize: UnityEngine.UI.CanvasScaler.ScaleMode;
  }
}
