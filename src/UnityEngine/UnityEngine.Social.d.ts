declare namespace UnityEngine {
  class Social extends System.Object {
    // constructors
    protected constructor();
    // methods
    static LoadUsers(userIDs: string[], callback: ((obj: UnityEngine.SocialPlatforms.IUserProfile[]) => void)): void;
    static ReportProgress(achievementID: string, progress: number, callback: ((obj: boolean) => void)): void;
    static LoadAchievementDescriptions(callback: ((obj: UnityEngine.SocialPlatforms.IAchievementDescription[]) => void)): void;
    static LoadAchievements(callback: ((obj: UnityEngine.SocialPlatforms.IAchievement[]) => void)): void;
    static ReportScore(score: number, board: string, callback: ((obj: boolean) => void)): void;
    static LoadScores(leaderboardID: string, callback: ((obj: UnityEngine.SocialPlatforms.IScore[]) => void)): void;
    static CreateLeaderboard(): UnityEngine.SocialPlatforms.ILeaderboard;
    static CreateAchievement(): UnityEngine.SocialPlatforms.IAchievement;
    static ShowAchievementsUI(): void;
    static ShowLeaderboardUI(): void;
    // properties
    static Active: UnityEngine.SocialPlatforms.ISocialPlatform;
    static readonly localUser: UnityEngine.SocialPlatforms.ILocalUser;
    // fields
  }
}
