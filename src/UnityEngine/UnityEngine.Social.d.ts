declare namespace UnityEngine {
  class Social {
    // constructors
    private constructor();
    // methods
    static LoadUsers(userIDs: string[], callback: any): void;
    static ReportProgress(achievementID: string, progress: number, callback: any): void;
    static LoadAchievementDescriptions(callback: any): void;
    static LoadAchievements(callback: any): void;
    static ReportScore(score: number, board: string, callback: any): void;
    static LoadScores(leaderboardID: string, callback: any): void;
    static CreateLeaderboard(): UnityEngine.SocialPlatforms.ILeaderboard;
    static CreateAchievement(): UnityEngine.SocialPlatforms.IAchievement;
    static ShowAchievementsUI(): void;
    static ShowLeaderboardUI(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static Active: UnityEngine.SocialPlatforms.ISocialPlatform;
    static readonly localUser: UnityEngine.SocialPlatforms.ILocalUser;
    // fields
  }
}
