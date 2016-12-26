declare namespace UnityEditor.Connect {
  class UnityConnectServiceCollection {
    // constructors
    private constructor();
    // methods
    CloseServices(): void;
    ReloadServices(): void;
    static StaticEnableService(serviceName: string, enabled: boolean): void;
    AddService(cloudService: UnityEditor.Connect.UnityConnectServiceData): boolean;
    RemoveService(serviceName: string): boolean;
    ServiceExist(serviceName: string): boolean;
    ShowService(serviceName: string, forceFocus: boolean): boolean;
    ShowService(serviceName: string, atPage: string, forceFocus: boolean): boolean;
    EnableService(name: string, enabled: boolean): void;
    GetUrlForService(serviceName: string): string;
    GetServiceFromUrl(searchUrl: string): UnityEditor.Connect.UnityConnectServiceData;
    GetAllServiceNames(): any;
    GetAllServiceUrls(): any;
    GetAllServiceInfos(): UnityEditor.Connect.UnityConnectServiceCollection.ServiceInfo[];
    GetWebViewFromServiceName(serviceName: string): UnityEditor.WebView;
    UnbindAllServices(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly isDrawerOpen: boolean;
    static readonly instance: UnityEditor.Connect.UnityConnectServiceCollection;
    // fields
  }
}
