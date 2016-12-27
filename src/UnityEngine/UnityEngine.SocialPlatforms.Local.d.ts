declare namespace UnityEngine.SocialPlatforms {
  class Local extends System.Object {
    // constructors
    constructor();
    // methods
    LoadUsers(userIDs: string[], callback: ((obj: UnityEngine.SocialPlatforms.IUserProfile[]) => void)): void;
    ReportProgress(id: string, progress: number, callback: ((obj: boolean) => void)): void;
    LoadAchievementDescriptions(callback: ((obj: UnityEngine.SocialPlatforms.IAchievementDescription[]) => void)): void;
    LoadAchievements(callback: ((obj: UnityEngine.SocialPlatforms.IAchievement[]) => void)): void;
    ReportScore(score: number, board: string, callback: ((obj: boolean) => void)): void;
    LoadScores(leaderboardID: string, callback: ((obj: UnityEngine.SocialPlatforms.IScore[]) => void)): void;
    ShowAchievementsUI(): void;
    ShowLeaderboardUI(): void;
    CreateLeaderboard(): UnityEngine.SocialPlatforms.ILeaderboard;
    CreateAchievement(): UnityEngine.SocialPlatforms.IAchievement;
    // properties
    readonly localUser: UnityEngine.SocialPlatforms.ILocalUser;
    // fields
  }
}
