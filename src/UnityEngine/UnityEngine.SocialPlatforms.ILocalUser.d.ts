declare namespace UnityEngine.SocialPlatforms {
  class ILocalUser {
    // constructors
    private constructor();
    // methods
    Authenticate(callback: ((boolean) => void)): void;
    Authenticate(callback: ((boolean, string) => void)): void;
    LoadFriends(callback: ((boolean) => void)): void;
    // properties
    readonly friends: UnityEngine.SocialPlatforms.IUserProfile[];
    readonly authenticated: boolean;
    readonly underage: boolean;
    // fields
  }
}
