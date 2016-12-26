declare namespace UnityEngine.SocialPlatforms {
  class ILocalUser {
    // constructors
    private constructor();
    // methods
    Authenticate(callback: any): void;
    Authenticate(callback: any): void;
    LoadFriends(callback: any): void;
    // properties
    readonly friends: UnityEngine.SocialPlatforms.IUserProfile[];
    readonly authenticated: boolean;
    readonly underage: boolean;
    // fields
  }
}
