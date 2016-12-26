declare namespace UnityEditor.Web {
  class AnalyticsAccess {
    // constructors
    constructor();
    // methods
    GetServiceName(): string;
    GetServiceDisplayName(): string;
    IsServiceEnabled(): boolean;
    EnableService(enabled: boolean): void;
    IsTestModeEnabled(): boolean;
    SetTestModeEnabled(enabled: boolean): void;
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
