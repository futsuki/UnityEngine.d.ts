declare namespace UnityEngine.SocialPlatforms.Impl {
  class UserProfile {
    // constructors
    constructor();
    constructor(name: string, id: string, friend: boolean);
    constructor(name: string, id: string, friend: boolean, state: UnityEngine.SocialPlatforms.UserState, image: UnityEngine.Texture2D);
    // methods
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
    readonly userName: string;
    readonly id: string;
    readonly isFriend: boolean;
    readonly state: UnityEngine.SocialPlatforms.UserState;
    readonly image: UnityEngine.Texture2D;
    // fields
  }
}
