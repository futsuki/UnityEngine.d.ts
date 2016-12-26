declare namespace UnityEngine.SocialPlatforms {
  class Local {
    // constructors
    constructor();
    // methods
    LoadUsers(userIDs: string[], callback: any): void;
    ReportProgress(id: string, progress: number, callback: any): void;
    LoadAchievementDescriptions(callback: any): void;
    LoadAchievements(callback: any): void;
    ReportScore(score: number, board: string, callback: any): void;
    LoadScores(leaderboardID: string, callback: any): void;
    ShowAchievementsUI(): void;
    ShowLeaderboardUI(): void;
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
