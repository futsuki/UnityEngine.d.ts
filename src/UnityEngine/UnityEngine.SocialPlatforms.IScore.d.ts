declare namespace UnityEngine.SocialPlatforms {
  class IScore {
    // constructors
    private constructor();
    // methods
    ReportScore(callback: any): void;
    // properties
    leaderboardID: string;
    value: number;
    readonly date: any;
    readonly formattedValue: string;
    readonly userID: string;
    readonly rank: number;
    // fields
  }
}
