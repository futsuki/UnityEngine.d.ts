declare namespace UnityEngine.UI.Navigation {
  class Mode {
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
    static None: UnityEngine.UI.Navigation.Mode;
    static Horizontal: UnityEngine.UI.Navigation.Mode;
    static Vertical: UnityEngine.UI.Navigation.Mode;
    static Automatic: UnityEngine.UI.Navigation.Mode;
    static Explicit: UnityEngine.UI.Navigation.Mode;
  }
}
