declare namespace UnityEngine.SocialPlatforms {
  class ISocialPlatform {
    // constructors
    protected constructor();
    // methods
    LoadUsers(userIDs: string[], callback: ((obj: UnityEngine.SocialPlatforms.IUserProfile[]) => void)): void;
    ReportProgress(achievementID: string, progress: number, callback: ((obj: boolean) => void)): void;
    LoadAchievementDescriptions(callback: ((obj: UnityEngine.SocialPlatforms.IAchievementDescription[]) => void)): void;
    LoadAchievements(callback: ((obj: UnityEngine.SocialPlatforms.IAchievement[]) => void)): void;
    CreateAchievement(): UnityEngine.SocialPlatforms.IAchievement;
    ReportScore(score: number, board: string, callback: ((obj: boolean) => void)): void;
    LoadScores(leaderboardID: string, callback: ((obj: UnityEngine.SocialPlatforms.IScore[]) => void)): void;
    LoadScores(board: UnityEngine.SocialPlatforms.ILeaderboard, callback: ((obj: boolean) => void)): void;
    CreateLeaderboard(): UnityEngine.SocialPlatforms.ILeaderboard;
    ShowAchievementsUI(): void;
    ShowLeaderboardUI(): void;
    Authenticate(user: UnityEngine.SocialPlatforms.ILocalUser, callback: ((obj: boolean) => void)): void;
    Authenticate(user: UnityEngine.SocialPlatforms.ILocalUser, callback: ((arg1: boolean, arg2: string) => void)): void;
    LoadFriends(user: UnityEngine.SocialPlatforms.ILocalUser, callback: ((obj: boolean) => void)): void;
    GetLoading(board: UnityEngine.SocialPlatforms.ILeaderboard): boolean;
    // properties
    readonly localUser: UnityEngine.SocialPlatforms.ILocalUser;
    // fields
  }
}
