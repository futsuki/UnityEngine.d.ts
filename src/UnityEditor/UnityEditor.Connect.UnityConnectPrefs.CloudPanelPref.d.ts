declare namespace UnityEditor.Connect.UnityConnectPrefs {
  class CloudPanelPref extends System.Object {
    // constructors
    constructor(serviceName: string);
    // methods
    StoreCloudServicePref(): void;
    // properties
    // fields
    m_ServiceName: string;
    m_CloudPanelServer: number;
    m_CloudPanelCustomUrl: string;
    m_CloudPanelCustomPort: number;
  }
}
