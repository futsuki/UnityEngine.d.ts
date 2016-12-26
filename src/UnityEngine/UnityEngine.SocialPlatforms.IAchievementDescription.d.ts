declare namespace UnityEngine.SocialPlatforms {
  class IAchievementDescription {
    // constructors
    private constructor();
    // methods
    // properties
    id: string;
    readonly title: string;
    readonly image: UnityEngine.Texture2D;
    readonly achievedDescription: string;
    readonly unachievedDescription: string;
    readonly hidden: boolean;
    readonly points: number;
    // fields
  }
}
