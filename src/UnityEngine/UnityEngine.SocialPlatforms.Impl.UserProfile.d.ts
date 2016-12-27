declare namespace UnityEngine.SocialPlatforms.Impl {
  class UserProfile extends System.Object {
    // constructors
    constructor();
    constructor(name: string, id: string, friend: boolean);
    constructor(name: string, id: string, friend: boolean, state: UnityEngine.SocialPlatforms.UserState, image: UnityEngine.Texture2D);
    // methods
    ToString(): string;
    SetUserName(name: string): void;
    SetUserID(id: string): void;
    SetImage(image: UnityEngine.Texture2D): void;
    SetIsFriend(value: boolean): void;
    SetState(state: UnityEngine.SocialPlatforms.UserState): void;
    // properties
    readonly userName: string;
    readonly id: string;
    readonly isFriend: boolean;
    readonly state: UnityEngine.SocialPlatforms.UserState;
    readonly image: UnityEngine.Texture2D;
    // fields
  }
}
