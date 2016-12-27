declare namespace UnityEngine.SocialPlatforms.Impl {
  class LocalUser extends UnityEngine.SocialPlatforms.Impl.UserProfile {
    // constructors
    constructor();
    // methods
    Authenticate(callback: ((obj: boolean) => void)): void;
    Authenticate(callback: ((arg1: boolean, arg2: string) => void)): void;
    LoadFriends(callback: ((obj: boolean) => void)): void;
    SetFriends(friends: UnityEngine.SocialPlatforms.IUserProfile[]): void;
    SetAuthenticated(value: boolean): void;
    SetUnderage(value: boolean): void;
    // properties
    readonly friends: UnityEngine.SocialPlatforms.IUserProfile[];
    readonly authenticated: boolean;
    readonly underage: boolean;
    // fields
  }
}
