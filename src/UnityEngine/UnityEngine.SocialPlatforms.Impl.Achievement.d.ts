declare namespace UnityEngine.SocialPlatforms.Impl {
  class Achievement {
    // constructors
    constructor(id: string, percentCompleted: number, completed: boolean, hidden: boolean, lastReportedDate: any);
    constructor(id: string, percent: number);
    constructor();
    // methods
    ToString(): string;
    ReportProgress(callback: any): void;
    SetCompleted(value: boolean): void;
    SetHidden(value: boolean): void;
    SetLastReportedDate(date: any): void;
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
