declare namespace UnityEngine.iOS {
  class ADInterstitialAd extends System.Object {
    // constructors
    constructor(autoReload: boolean);
    constructor();
    // methods
    Show(): void;
    ReloadAd(): void;
    // properties
    static readonly isAvailable: boolean;
    readonly loaded: boolean;
    // fields
  }
}
