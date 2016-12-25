declare namespace UnityEditor.Web {
  class AnalyticsAccess {
    // constructors
    constructor();
    // methods
    GetServiceName(): string;
    GetServiceDisplayName(): string;
    IsServiceEnabled(): boolean;
    EnableService(enabled: boolean): any;
    IsTestModeEnabled(): boolean;
    SetTestModeEnabled(enabled: boolean): any;
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
