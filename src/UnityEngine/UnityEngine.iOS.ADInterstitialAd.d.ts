declare namespace UnityEngine.iOS {
  class ADInterstitialAd {
    // constructors
    constructor(autoReload: boolean);
    constructor();
    // methods
    Show(): any;
    ReloadAd(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly isAvailable: boolean;
    readonly loaded: boolean;
    // fields
  }
}
