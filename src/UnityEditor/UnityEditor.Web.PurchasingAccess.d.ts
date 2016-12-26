declare namespace UnityEditor.Web {
  class PurchasingAccess {
    // constructors
    constructor();
    // methods
    GetServiceName(): string;
    GetServiceDisplayName(): string;
    IsServiceEnabled(): boolean;
    EnableService(enabled: boolean): void;
    InstallUnityPackage(): void;
    GetInstalledETag(): string;
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
