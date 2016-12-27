declare namespace UnityEditor.Web {
  class CloudServiceAccess extends System.Object {
    // constructors
    constructor();
    // methods
    GetServiceName(): string;
    GetServiceDisplayName(): string;
    IsServiceEnabled(): boolean;
    EnableService(enabled: boolean): void;
    OnProjectUnbound(): void;
    ShowServicePage(): void;
    GoBackToHub(): void;
    // properties
    // fields
  }
}
