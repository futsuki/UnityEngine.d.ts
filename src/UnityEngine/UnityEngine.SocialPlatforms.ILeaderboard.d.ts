declare namespace UnityEngine.SocialPlatforms {
  class ILeaderboard {
    // constructors
    private constructor();
    // methods
    SetUserFilter(userIDs: string[]): void;
    LoadScores(callback: any): void;
    // properties
    readonly loading: boolean;
    id: string;
    userScope: UnityEngine.SocialPlatforms.UserScope;
    range: UnityEngine.SocialPlatforms.Range;
    timeScope: UnityEngine.SocialPlatforms.TimeScope;
    readonly localUserScore: UnityEngine.SocialPlatforms.IScore;
    readonly maxRange: number;
    readonly scores: UnityEngine.SocialPlatforms.IScore[];
    readonly title: string;
    // fields
  }
}
