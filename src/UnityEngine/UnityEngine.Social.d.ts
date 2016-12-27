declare namespace UnityEngine {
  class Social {
    // constructors
    private constructor();
    // methods
    static LoadUsers(userIDs: string[], callback: ((UnityEngine.SocialPlatforms.IUserProfile[]) => void)): void;
    static ReportProgress(achievementID: string, progress: number, callback: ((boolean) => void)): void;
    static LoadAchievementDescriptions(callback: ((UnityEngine.SocialPlatforms.IAchievementDescription[]) => void)): void;
    static LoadAchievements(callback: ((UnityEngine.SocialPlatforms.IAchievement[]) => void)): void;
    static ReportScore(score: number, board: string, callback: ((boolean) => void)): void;
    static LoadScores(leaderboardID: string, callback: ((UnityEngine.SocialPlatforms.IScore[]) => void)): void;
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
