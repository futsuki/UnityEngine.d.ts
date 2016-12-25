declare namespace UnityEngine.SocialPlatforms.Impl {
  class Score {
    // constructors
    constructor();
    constructor(leaderboardID: string, value: number);
    constructor(leaderboardID: string, value: number, userID: string, date: any, formattedValue: string, rank: number);
    // methods
    ToString(): string;
    ReportScore(callback: any): any;
    SetDate(date: any): any;
    SetFormattedValue(value: string): any;
    SetUserID(userID: string): any;
    SetRank(rank: number): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
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
