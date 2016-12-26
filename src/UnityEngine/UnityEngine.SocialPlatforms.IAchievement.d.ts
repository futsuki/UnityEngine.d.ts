declare namespace UnityEngine.SocialPlatforms {
  class IAchievement {
    // constructors
    private constructor();
    // methods
    ReportProgress(callback: any): void;
    // properties
    id: string;
    percentCompleted: number;
    readonly completed: boolean;
    readonly hidden: boolean;
    readonly lastReportedDate: any;
    // fields
  }
}
