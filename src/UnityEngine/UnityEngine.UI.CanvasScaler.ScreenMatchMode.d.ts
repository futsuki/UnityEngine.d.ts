declare namespace UnityEngine.UI.CanvasScaler {
  class ScreenMatchMode {
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
    static MatchWidthOrHeight: UnityEngine.UI.CanvasScaler.ScreenMatchMode;
    static Expand: UnityEngine.UI.CanvasScaler.ScreenMatchMode;
    static Shrink: UnityEngine.UI.CanvasScaler.ScreenMatchMode;
  }
}
