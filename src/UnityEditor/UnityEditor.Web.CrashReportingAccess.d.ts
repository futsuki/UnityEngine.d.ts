declare namespace UnityEditor.Web {
  class CrashReportingAccess {
    // constructors
    constructor();
    // methods
    GetServiceName(): string;
    GetServiceDisplayName(): string;
    IsServiceEnabled(): boolean;
    EnableService(enabled: boolean): any;
    GetCaptureEditorExceptions(): boolean;
    SetCaptureEditorExceptions(captureEditorExceptions: boolean): any;
    OnProjectUnbound(): any;
    ShowServicePage(): any;
    GoBackToHub(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
