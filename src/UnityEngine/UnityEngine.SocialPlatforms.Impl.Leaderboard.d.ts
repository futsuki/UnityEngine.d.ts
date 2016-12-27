declare namespace UnityEngine.SocialPlatforms.Impl {
  class Leaderboard extends System.Object {
    // constructors
    constructor();
    // methods
    SetUserFilter(userIDs: string[]): void;
    ToString(): string;
    LoadScores(callback: ((obj: boolean) => void)): void;
    SetLocalUserScore(score: UnityEngine.SocialPlatforms.IScore): void;
    SetMaxRange(maxRange: number): void;
    SetScores(scores: UnityEngine.SocialPlatforms.IScore[]): void;
    SetTitle(title: string): void;
    GetUserFilter(): string[];
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
