declare namespace UnityEngine.SocialPlatforms {
  class ILocalUser {
    // constructors
    protected constructor();
    // methods
    Authenticate(callback: ((obj: boolean) => void)): void;
    Authenticate(callback: ((arg1: boolean, arg2: string) => void)): void;
    LoadFriends(callback: ((obj: boolean) => void)): void;
    // properties
    readonly friends: UnityEngine.SocialPlatforms.IUserProfile[];
    readonly authenticated: boolean;
    readonly underage: boolean;
    // fields
  }
}
