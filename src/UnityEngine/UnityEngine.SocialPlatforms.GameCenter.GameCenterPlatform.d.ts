declare namespace UnityEngine.SocialPlatforms.GameCenter {
  class GameCenterPlatform {
    // constructors
    constructor();
    // methods
    static ResetAllAchievements(callback: ((boolean) => void)): void;
    static ShowDefaultAchievementCompletionBanner(value: boolean): void;
    static ShowLeaderboardUI(leaderboardID: string, timeScope: UnityEngine.SocialPlatforms.TimeScope): void;
    LoadUsers(userIDs: string[], callback: ((UnityEngine.SocialPlatforms.IUserProfile[]) => void)): void;
    ReportProgress(id: string, progress: number, callback: ((boolean) => void)): void;
    LoadAchievementDescriptions(callback: ((UnityEngine.SocialPlatforms.IAchievementDescription[]) => void)): void;
    LoadAchievements(callback: ((UnityEngine.SocialPlatforms.IAchievement[]) => void)): void;
    ReportScore(score: number, board: string, callback: ((boolean) => void)): void;
    LoadScores(leaderboardID: string, callback: ((UnityEngine.SocialPlatforms.IScore[]) => void)): void;
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
