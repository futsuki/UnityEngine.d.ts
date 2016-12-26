declare namespace UnityEngine.UI.Slider {
  class Direction {
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
    static LeftToRight: UnityEngine.UI.Slider.Direction;
    static RightToLeft: UnityEngine.UI.Slider.Direction;
    static BottomToTop: UnityEngine.UI.Slider.Direction;
    static TopToBottom: UnityEngine.UI.Slider.Direction;
  }
}
