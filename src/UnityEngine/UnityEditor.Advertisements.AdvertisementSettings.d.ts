declare namespace UnityEditor.Advertisements {
  class AdvertisementSettings {
    // constructors
    private constructor();
    // methods
    static IsPlatformEnabled(platform: UnityEngine.RuntimePlatform): boolean;
    static SetPlatformEnabled(platform: UnityEngine.RuntimePlatform, value: boolean): any;
    static GetGameId(platform: UnityEngine.RuntimePlatform): string;
    static SetGameId(platform: UnityEngine.RuntimePlatform, gameId: string): any;
    // properties
    // fields
  }
}
