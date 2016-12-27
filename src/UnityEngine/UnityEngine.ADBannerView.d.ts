declare namespace UnityEngine {
  class ADBannerView extends System.Object {
    // constructors
    constructor(type: UnityEngine.ADBannerView.Type, layout: UnityEngine.ADBannerView.Layout);
    // methods
    static IsAvailable(type: UnityEngine.ADBannerView.Type): boolean;
    // properties
    readonly loaded: boolean;
    visible: boolean;
    layout: UnityEngine.ADBannerView.Layout;
    position: UnityEngine.Vector2;
    readonly size: UnityEngine.Vector2;
    // fields
  }
}
