declare namespace UnityEngine {
  class ADBannerView {
    // constructors
    constructor(type: UnityEngine.ADBannerView.Type, layout: UnityEngine.ADBannerView.Layout);
    // methods
    static IsAvailable(type: UnityEngine.ADBannerView.Type): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly loaded: boolean;
    visible: boolean;
    layout: UnityEngine.ADBannerView.Layout;
    position: UnityEngine.Vector2;
    readonly size: UnityEngine.Vector2;
    // fields
  }
}
