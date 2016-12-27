declare namespace UnityEngine.SocialPlatforms {
  class IScore {
    // constructors
    protected constructor();
    // methods
    ReportScore(callback: ((obj: boolean) => void)): void;
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
