declare namespace UnityEngine {
  class ADInterstitialAd {
    // constructors
    constructor(autoReload: boolean);
    constructor();
    // methods
    Show(): void;
    ReloadAd(): void;
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
