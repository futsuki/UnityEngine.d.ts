declare namespace UnityEngine {
  class Social {
    // constructors
    private constructor();
    // methods
    static LoadUsers(userIDs: string[], callback: any): any;
    static ReportProgress(achievementID: string, progress: number, callback: any): any;
    static LoadAchievementDescriptions(callback: any): any;
    static LoadAchievements(callback: any): any;
    static ReportScore(score: number, board: string, callback: any): any;
    static LoadScores(leaderboardID: string, callback: any): any;
    static CreateLeaderboard(): UnityEngine.SocialPlatforms.ILeaderboard;
    static CreateAchievement(): UnityEngine.SocialPlatforms.IAchievement;
    static ShowAchievementsUI(): any;
    static ShowLeaderboardUI(): any;
    // properties
    // fields
  }
}
