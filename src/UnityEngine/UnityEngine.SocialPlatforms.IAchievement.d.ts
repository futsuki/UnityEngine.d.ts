declare namespace UnityEngine.SocialPlatforms {
  class IAchievement {
    // constructors
    protected constructor();
    // methods
    ReportProgress(callback: ((obj: boolean) => void)): void;
    // properties
    id: string;
    percentCompleted: number;
    readonly completed: boolean;
    readonly hidden: boolean;
    readonly lastReportedDate: any;
    // fields
  }
}
