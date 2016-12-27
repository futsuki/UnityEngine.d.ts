declare namespace UnityEngine.SocialPlatforms {
  class IUserProfile {
    // constructors
    protected constructor();
    // methods
    // properties
    readonly userName: string;
    readonly id: string;
    readonly isFriend: boolean;
    readonly state: UnityEngine.SocialPlatforms.UserState;
    readonly image: UnityEngine.Texture2D;
    // fields
  }
}
