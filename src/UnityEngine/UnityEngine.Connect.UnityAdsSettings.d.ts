declare namespace UnityEngine.Connect {
  class UnityAdsSettings {
    // constructors
    constructor();
    // methods
    static IsPlatformEnabled(platform: UnityEngine.RuntimePlatform): boolean;
    static SetPlatformEnabled(platform: UnityEngine.RuntimePlatform, value: boolean): any;
    static GetGameId(platform: UnityEngine.RuntimePlatform): string;
    static SetGameId(platform: UnityEngine.RuntimePlatform, gameId: string): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static enabled: boolean;
    static initializeOnStartup: boolean;
    static testMode: boolean;
    // fields
  }
}
