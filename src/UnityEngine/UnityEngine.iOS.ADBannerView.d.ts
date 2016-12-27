declare namespace UnityEngine.iOS {
  class ADBannerView extends System.Object {
    // constructors
    constructor(type: UnityEngine.iOS.ADBannerView.Type, layout: UnityEngine.iOS.ADBannerView.Layout);
    // methods
    static IsAvailable(type: UnityEngine.iOS.ADBannerView.Type): boolean;
    // properties
    readonly loaded: boolean;
    visible: boolean;
    layout: UnityEngine.iOS.ADBannerView.Layout;
    position: UnityEngine.Vector2;
    readonly size: UnityEngine.Vector2;
    // fields
  }
}
