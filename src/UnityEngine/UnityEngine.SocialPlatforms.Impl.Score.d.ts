declare namespace UnityEngine.SocialPlatforms.Impl {
  class Score extends System.Object {
    // constructors
    constructor();
    constructor(leaderboardID: string, value: number);
    constructor(leaderboardID: string, value: number, userID: string, date: any, formattedValue: string, rank: number);
    // methods
    ToString(): string;
    ReportScore(callback: ((obj: boolean) => void)): void;
    SetDate(date: any): void;
    SetFormattedValue(value: string): void;
    SetUserID(userID: string): void;
    SetRank(rank: number): void;
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
