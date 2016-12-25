declare namespace UnityEditor.Connect {
  class UnityConnectServiceData {
    // constructors
    constructor(serviceName: string, htmlSourcePath: string, jsGlobalObject: UnityEditor.Web.CloudServiceAccess, jsGlobalObjectName: string);
    // methods
    EnableService(enabled: boolean): any;
    OnProjectUnbound(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly serviceName: string;
    readonly serviceUrl: string;
    readonly serviceJsGlobalObject: UnityEditor.Web.CloudServiceAccess;
    readonly serviceJsGlobalObjectName: string;
    // fields
  }
}
