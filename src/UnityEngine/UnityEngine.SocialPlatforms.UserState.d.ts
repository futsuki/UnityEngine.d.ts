declare namespace UnityEngine.SocialPlatforms {
  class UserState {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static Online: UnityEngine.SocialPlatforms.UserState;
    static OnlineAndAway: UnityEngine.SocialPlatforms.UserState;
    static OnlineAndBusy: UnityEngine.SocialPlatforms.UserState;
    static Offline: UnityEngine.SocialPlatforms.UserState;
    static Playing: UnityEngine.SocialPlatforms.UserState;
  }
}
