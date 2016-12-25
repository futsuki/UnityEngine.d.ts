declare namespace UnityEditor.Web {
  class HubAccess {
    // constructors
    constructor();
    // methods
    GetServiceName(): string;
    GetServiceDisplayName(): string;
    GetServices(): UnityEditor.Connect.UnityConnectServiceCollection.ServiceInfo[];
    ShowService(name: string): any;
    EnableCloudService(name: string, enabled: boolean): any;
    IsServiceEnabled(): boolean;
    EnableService(enabled: boolean): any;
    OnProjectUnbound(): any;
    ShowServicePage(): any;
    GoBackToHub(): any;
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
