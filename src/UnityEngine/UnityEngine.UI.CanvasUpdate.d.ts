declare namespace UnityEngine.UI {
  class CanvasUpdate {
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
    static Prelayout: UnityEngine.UI.CanvasUpdate;
    static Layout: UnityEngine.UI.CanvasUpdate;
    static PostLayout: UnityEngine.UI.CanvasUpdate;
    static PreRender: UnityEngine.UI.CanvasUpdate;
    static LatePreRender: UnityEngine.UI.CanvasUpdate;
    static MaxUpdateValue: UnityEngine.UI.CanvasUpdate;
  }
}
