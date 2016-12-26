declare namespace UnityEngine.SocialPlatforms.Impl {
  class AchievementDescription {
    // constructors
    constructor(id: string, title: string, image: UnityEngine.Texture2D, achievedDescription: string, unachievedDescription: string, hidden: boolean, points: number);
    // methods
    ToString(): string;
    SetImage(image: UnityEngine.Texture2D): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
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
