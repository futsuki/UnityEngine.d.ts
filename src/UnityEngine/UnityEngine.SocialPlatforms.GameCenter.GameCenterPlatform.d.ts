declare namespace UnityEngine.SocialPlatforms.GameCenter {
  class GameCenterPlatform extends UnityEngine.SocialPlatforms.Local {
    // constructors
    constructor();
    // methods
    static ResetAllAchievements(callback: ((obj: boolean) => void)): void;
    static ShowDefaultAchievementCompletionBanner(value: boolean): void;
    static ShowLeaderboardUI(leaderboardID: string, timeScope: UnityEngine.SocialPlatforms.TimeScope): void;
    ShowLeaderboardUI(): void;
    // properties
    // fields
  }
}
