declare namespace UnityEngine.SocialPlatforms.Impl {
  class LocalUser {
    // constructors
    constructor();
    // methods
    Authenticate(callback: any): void;
    Authenticate(callback: any): void;
    LoadFriends(callback: any): void;
    SetFriends(friends: UnityEngine.SocialPlatforms.IUserProfile[]): void;
    SetAuthenticated(value: boolean): void;
    SetUnderage(value: boolean): void;
    ToString(): string;
    SetUserName(name: string): void;
    SetUserID(id: string): void;
    SetImage(image: UnityEngine.Texture2D): void;
    SetIsFriend(value: boolean): void;
    SetState(state: UnityEngine.SocialPlatforms.UserState): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    readonly friends: UnityEngine.SocialPlatforms.IUserProfile[];
    readonly authenticated: boolean;
    readonly underage: boolean;
    readonly userName: string;
    readonly id: string;
    readonly isFriend: boolean;
    readonly state: UnityEngine.SocialPlatforms.UserState;
    readonly image: UnityEngine.Texture2D;
    // fields
  }
}
