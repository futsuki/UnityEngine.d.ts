declare namespace UnityEngine.UI.ContentSizeFitter {
  class FitMode {
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
    static Unconstrained: UnityEngine.UI.ContentSizeFitter.FitMode;
    static MinSize: UnityEngine.UI.ContentSizeFitter.FitMode;
    static PreferredSize: UnityEngine.UI.ContentSizeFitter.FitMode;
  }
}
