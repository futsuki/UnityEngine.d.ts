declare namespace UnityEngine.SocialPlatforms.Impl {
  class LocalUser {
    // constructors
    constructor();
    // methods
    Authenticate(callback: any): any;
    Authenticate(callback: any): any;
    LoadFriends(callback: any): any;
    SetFriends(friends: UnityEngine.SocialPlatforms.IUserProfile[]): any;
    SetAuthenticated(value: boolean): any;
    SetUnderage(value: boolean): any;
    ToString(): string;
    SetUserName(name: string): any;
    SetUserID(id: string): any;
    SetImage(image: UnityEngine.Texture2D): any;
    SetIsFriend(value: boolean): any;
    SetState(state: UnityEngine.SocialPlatforms.UserState): any;
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
