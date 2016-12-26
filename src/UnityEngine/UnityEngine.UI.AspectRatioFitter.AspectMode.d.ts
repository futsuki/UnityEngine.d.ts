declare namespace UnityEngine.UI.AspectRatioFitter {
  class AspectMode {
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
    static None: UnityEngine.UI.AspectRatioFitter.AspectMode;
    static WidthControlsHeight: UnityEngine.UI.AspectRatioFitter.AspectMode;
    static HeightControlsWidth: UnityEngine.UI.AspectRatioFitter.AspectMode;
    static FitInParent: UnityEngine.UI.AspectRatioFitter.AspectMode;
    static EnvelopeParent: UnityEngine.UI.AspectRatioFitter.AspectMode;
  }
}
