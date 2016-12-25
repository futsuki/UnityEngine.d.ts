declare namespace UnityEngine.SocialPlatforms.Impl {
  class Achievement {
    // constructors
    constructor(id: string, percentCompleted: number, completed: boolean, hidden: boolean, lastReportedDate: any);
    constructor(id: string, percent: number);
    constructor();
    // methods
    ToString(): string;
    ReportProgress(callback: any): any;
    SetCompleted(value: boolean): any;
    SetHidden(value: boolean): any;
    SetLastReportedDate(date: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    id: string;
    percentCompleted: number;
    readonly completed: boolean;
    readonly hidden: boolean;
    readonly lastReportedDate: any;
    // fields
  }
}
