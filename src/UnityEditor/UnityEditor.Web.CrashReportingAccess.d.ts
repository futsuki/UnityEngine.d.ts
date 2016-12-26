declare namespace UnityEditor.Web {
  class CrashReportingAccess {
    // constructors
    constructor();
    // methods
    GetServiceName(): string;
    GetServiceDisplayName(): string;
    IsServiceEnabled(): boolean;
    EnableService(enabled: boolean): void;
    GetCaptureEditorExceptions(): boolean;
    SetCaptureEditorExceptions(captureEditorExceptions: boolean): void;
    OnProjectUnbound(): void;
    ShowServicePage(): void;
    GoBackToHub(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
