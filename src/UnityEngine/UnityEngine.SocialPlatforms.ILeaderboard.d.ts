declare namespace UnityEngine.SocialPlatforms {
  class ILeaderboard {
    // constructors
    protected constructor();
    // methods
    SetUserFilter(userIDs: string[]): void;
    LoadScores(callback: ((obj: boolean) => void)): void;
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
