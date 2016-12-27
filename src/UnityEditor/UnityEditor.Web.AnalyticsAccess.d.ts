declare namespace UnityEditor.Web {
  class AnalyticsAccess extends UnityEditor.Web.CloudServiceAccess {
    // constructors
    constructor();
    // methods
    GetServiceName(): string;
    GetServiceDisplayName(): string;
    IsServiceEnabled(): boolean;
    EnableService(enabled: boolean): void;
    IsTestModeEnabled(): boolean;
    SetTestModeEnabled(enabled: boolean): void;
    // properties
    // fields
  }
}
