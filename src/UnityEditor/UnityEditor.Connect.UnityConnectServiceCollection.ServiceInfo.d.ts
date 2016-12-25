declare namespace UnityEditor.Connect.UnityConnectServiceCollection {
  class ServiceInfo {
    // constructors
    constructor(name: string, url: string, unityPath: string, enabled: boolean);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    name: string;
    url: string;
    unityPath: string;
    enabled: boolean;
  }
}
