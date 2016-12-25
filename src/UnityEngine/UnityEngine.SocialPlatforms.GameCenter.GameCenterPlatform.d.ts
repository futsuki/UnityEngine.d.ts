declare namespace UnityEngine.SocialPlatforms.GameCenter {
  class GameCenterPlatform {
    // constructors
    constructor();
    // methods
    static ResetAllAchievements(callback: any): any;
    static ShowDefaultAchievementCompletionBanner(value: boolean): any;
    static ShowLeaderboardUI(leaderboardID: string, timeScope: UnityEngine.SocialPlatforms.TimeScope): any;
    LoadUsers(userIDs: string[], callback: any): any;
    ReportProgress(id: string, progress: number, callback: any): any;
    LoadAchievementDescriptions(callback: any): any;
    LoadAchievements(callback: any): any;
    ReportScore(score: number, board: string, callback: any): any;
    LoadScores(leaderboardID: string, callback: any): any;
    ShowAchievementsUI(): any;
    ShowLeaderboardUI(): any;
    CreateLeaderboard(): UnityEngine.SocialPlatforms.ILeaderboard;
    CreateAchievement(): UnityEngine.SocialPlatforms.IAchievement;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly localUser: UnityEngine.SocialPlatforms.ILocalUser;
    // fields
  }
}
