declare namespace UnityEditor.Web {
  class PurchasingAccess extends UnityEditor.Web.CloudServiceAccess {
    // constructors
    constructor();
    // methods
    GetServiceName(): string;
    GetServiceDisplayName(): string;
    IsServiceEnabled(): boolean;
    EnableService(enabled: boolean): void;
    InstallUnityPackage(): void;
    GetInstalledETag(): string;
    // properties
    // fields
  }
}
