declare namespace UnityEditor.Web {
  class HubAccess extends UnityEditor.Web.CloudServiceAccess {
    // constructors
    constructor();
    // methods
    GetServiceName(): string;
    GetServiceDisplayName(): string;
    GetServices(): UnityEditor.Connect.UnityConnectServiceCollection.ServiceInfo[];
    ShowService(name: string): void;
    EnableCloudService(name: string, enabled: boolean): void;
    // properties
    static readonly instance: UnityEditor.Web.HubAccess;
    // fields
    static kServiceName: string;
  }
}
