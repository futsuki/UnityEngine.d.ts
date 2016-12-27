declare namespace UnityEditor.Connect {
  class UnityConnectServiceData extends System.Object {
    // constructors
    constructor(serviceName: string, htmlSourcePath: string, jsGlobalObject: UnityEditor.Web.CloudServiceAccess, jsGlobalObjectName: string);
    // methods
    EnableService(enabled: boolean): void;
    OnProjectUnbound(): void;
    // properties
    readonly serviceName: string;
    readonly serviceUrl: string;
    readonly serviceJsGlobalObject: UnityEditor.Web.CloudServiceAccess;
    readonly serviceJsGlobalObjectName: string;
    // fields
  }
}
