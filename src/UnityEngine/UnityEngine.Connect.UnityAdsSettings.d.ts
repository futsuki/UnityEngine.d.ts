declare namespace UnityEngine.Connect {
  class UnityAdsSettings extends System.Object {
    // constructors
    constructor();
    // methods
    static IsPlatformEnabled(platform: UnityEngine.RuntimePlatform): boolean;
    static SetPlatformEnabled(platform: UnityEngine.RuntimePlatform, value: boolean): void;
    static GetGameId(platform: UnityEngine.RuntimePlatform): string;
    static SetGameId(platform: UnityEngine.RuntimePlatform, gameId: string): void;
    // properties
    static enabled: boolean;
    static initializeOnStartup: boolean;
    static testMode: boolean;
    // fields
  }
}
