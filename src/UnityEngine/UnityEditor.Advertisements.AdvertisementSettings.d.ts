declare namespace UnityEditor.Advertisements {
  class AdvertisementSettings {
    // constructors
    private constructor();
    // methods
    static IsPlatformEnabled(platform: UnityEngine.RuntimePlatform): boolean;
    static SetPlatformEnabled(platform: UnityEngine.RuntimePlatform, value: boolean): void;
    static GetGameId(platform: UnityEngine.RuntimePlatform): string;
    static SetGameId(platform: UnityEngine.RuntimePlatform, gameId: string): void;
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
