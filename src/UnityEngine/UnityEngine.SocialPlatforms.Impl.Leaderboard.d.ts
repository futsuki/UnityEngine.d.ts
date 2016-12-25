declare namespace UnityEngine.SocialPlatforms.Impl {
  class Leaderboard {
    // constructors
    constructor();
    // methods
    SetUserFilter(userIDs: string[]): any;
    ToString(): string;
    LoadScores(callback: any): any;
    SetLocalUserScore(score: UnityEngine.SocialPlatforms.IScore): any;
    SetMaxRange(maxRange: number): any;
    SetScores(scores: UnityEngine.SocialPlatforms.IScore[]): any;
    SetTitle(title: string): any;
    GetUserFilter(): string[];
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
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
