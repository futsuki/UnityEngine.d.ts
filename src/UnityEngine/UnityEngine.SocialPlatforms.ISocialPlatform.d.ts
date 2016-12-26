declare namespace UnityEngine.SocialPlatforms {
  class ISocialPlatform {
    // constructors
    private constructor();
    // methods
    LoadUsers(userIDs: string[], callback: any): void;
    ReportProgress(achievementID: string, progress: number, callback: any): void;
    LoadAchievementDescriptions(callback: any): void;
    LoadAchievements(callback: any): void;
    CreateAchievement(): UnityEngine.SocialPlatforms.IAchievement;
    ReportScore(score: number, board: string, callback: any): void;
    LoadScores(leaderboardID: string, callback: any): void;
    CreateLeaderboard(): UnityEngine.SocialPlatforms.ILeaderboard;
    ShowAchievementsUI(): void;
    ShowLeaderboardUI(): void;
    Authenticate(user: UnityEngine.SocialPlatforms.ILocalUser, callback: any): void;
    Authenticate(user: UnityEngine.SocialPlatforms.ILocalUser, callback: any): void;
    LoadFriends(user: UnityEngine.SocialPlatforms.ILocalUser, callback: any): void;
    LoadScores(board: UnityEngine.SocialPlatforms.ILeaderboard, callback: any): void;
    GetLoading(board: UnityEngine.SocialPlatforms.ILeaderboard): boolean;
    // properties
    readonly localUser: UnityEngine.SocialPlatforms.ILocalUser;
    // fields
  }
}
