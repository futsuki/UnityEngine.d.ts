declare namespace UnityEngine.SocialPlatforms {
  class UserScope {
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
    static Global: UnityEngine.SocialPlatforms.UserScope;
    static FriendsOnly: UnityEngine.SocialPlatforms.UserScope;
  }
}
