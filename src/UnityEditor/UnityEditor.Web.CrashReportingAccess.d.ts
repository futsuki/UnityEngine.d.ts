declare namespace UnityEditor.Web {
  class CrashReportingAccess extends UnityEditor.Web.CloudServiceAccess {
    // constructors
    constructor();
    // methods
    GetServiceName(): string;
    GetServiceDisplayName(): string;
    IsServiceEnabled(): boolean;
    EnableService(enabled: boolean): void;
    GetCaptureEditorExceptions(): boolean;
    SetCaptureEditorExceptions(captureEditorExceptions: boolean): void;
    // properties
    // fields
  }
}
