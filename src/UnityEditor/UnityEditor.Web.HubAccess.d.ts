declare namespace UnityEditor.Web {
  class HubAccess {
    // constructors
    constructor();
    // methods
    GetServiceName(): string;
    GetServiceDisplayName(): string;
    GetServices(): UnityEditor.Connect.UnityConnectServiceCollection.ServiceInfo[];
    ShowService(name: string): void;
    EnableCloudService(name: string, enabled: boolean): void;
    IsServiceEnabled(): boolean;
    EnableService(enabled: boolean): void;
    OnProjectUnbound(): void;
    ShowServicePage(): void;
    GoBackToHub(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly instance: UnityEditor.Web.HubAccess;
    // fields
    static kServiceName: string;
  }
}
