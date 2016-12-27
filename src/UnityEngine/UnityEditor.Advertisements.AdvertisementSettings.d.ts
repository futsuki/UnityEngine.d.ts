declare namespace UnityEditor.Advertisements {
  class AdvertisementSettings extends System.Object {
    // constructors
    protected constructor();
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
