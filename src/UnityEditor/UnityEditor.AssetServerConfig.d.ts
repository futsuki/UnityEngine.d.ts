declare namespace UnityEditor {
  class AssetServerConfig {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    connectionSettings: string;
    server: string;
    portNumber: number;
    timeout: number;
    userName: string;
    dbName: string;
    projectName: string;
    settingsType: string;
    // fields
  }
}
