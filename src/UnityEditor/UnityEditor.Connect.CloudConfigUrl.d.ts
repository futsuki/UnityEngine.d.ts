declare namespace UnityEditor.Connect {
  class CloudConfigUrl {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static CloudCore: UnityEditor.Connect.CloudConfigUrl;
    static CloudCollab: UnityEditor.Connect.CloudConfigUrl;
    static CloudWebauth: UnityEditor.Connect.CloudConfigUrl;
    static CloudLogin: UnityEditor.Connect.CloudConfigUrl;
    static CloudIdentity: UnityEditor.Connect.CloudConfigUrl;
    static CloudPortal: UnityEditor.Connect.CloudConfigUrl;
  }
}
