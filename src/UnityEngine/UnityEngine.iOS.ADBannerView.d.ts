declare namespace UnityEngine.iOS {
  class ADBannerView {
    // constructors
    constructor(type: UnityEngine.iOS.ADBannerView.Type, layout: UnityEngine.iOS.ADBannerView.Layout);
    // methods
    static IsAvailable(type: UnityEngine.iOS.ADBannerView.Type): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly loaded: boolean;
    visible: boolean;
    layout: UnityEngine.iOS.ADBannerView.Layout;
    position: UnityEngine.Vector2;
    readonly size: UnityEngine.Vector2;
    // fields
  }
}
