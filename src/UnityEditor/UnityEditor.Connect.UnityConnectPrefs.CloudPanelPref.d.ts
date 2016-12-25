declare namespace UnityEditor.Connect.UnityConnectPrefs {
  class CloudPanelPref {
    // constructors
    constructor(serviceName: string);
    // methods
    StoreCloudServicePref(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    m_ServiceName: string;
    m_CloudPanelServer: number;
    m_CloudPanelCustomUrl: string;
    m_CloudPanelCustomPort: number;
  }
}
