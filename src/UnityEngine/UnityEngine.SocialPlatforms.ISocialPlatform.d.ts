declare namespace UnityEngine.SocialPlatforms {
  class ISocialPlatform {
    // constructors
    private constructor();
    // methods
    LoadUsers(userIDs: string[], callback: ((UnityEngine.SocialPlatforms.IUserProfile[]) => void)): void;
    ReportProgress(achievementID: string, progress: number, callback: ((boolean) => void)): void;
    LoadAchievementDescriptions(callback: ((UnityEngine.SocialPlatforms.IAchievementDescription[]) => void)): void;
    LoadAchievements(callback: ((UnityEngine.SocialPlatforms.IAchievement[]) => void)): void;
    CreateAchievement(): UnityEngine.SocialPlatforms.IAchievement;
    ReportScore(score: number, board: string, callback: ((boolean) => void)): void;
    LoadScores(leaderboardID: string, callback: ((UnityEngine.SocialPlatforms.IScore[]) => void)): void;
    CreateLeaderboard(): UnityEngine.SocialPlatforms.ILeaderboard;
    ShowAchievementsUI(): void;
    ShowLeaderboardUI(): void;
    Authenticate(user: UnityEngine.SocialPlatforms.ILocalUser, callback: ((boolean) => void)): void;
    Authenticate(user: UnityEngine.SocialPlatforms.ILocalUser, callback: ((boolean, string) => void)): void;
    LoadFriends(user: UnityEngine.SocialPlatforms.ILocalUser, callback: ((boolean) => void)): void;
    LoadScores(board: UnityEngine.SocialPlatforms.ILeaderboard, callback: ((boolean) => void)): void;
    GetLoading(board: UnityEngine.SocialPlatforms.ILeaderboard): boolean;
    // properties
    readonly localUser: UnityEngine.SocialPlatforms.ILocalUser;
    // fields
  }
}
