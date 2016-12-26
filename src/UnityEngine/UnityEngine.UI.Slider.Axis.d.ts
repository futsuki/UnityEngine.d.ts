declare namespace UnityEngine.UI.Slider {
  class Axis {
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
    static Horizontal: UnityEngine.UI.Slider.Axis;
    static Vertical: UnityEngine.UI.Slider.Axis;
  }
}
