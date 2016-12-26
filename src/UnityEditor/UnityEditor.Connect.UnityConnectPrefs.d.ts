declare namespace UnityEditor.Connect {
  class UnityConnectPrefs {
    // constructors
    constructor();
    // methods
    static GetServiceEnv(serviceName: string): number;
    static ServicePrefKey(baseKey: string, serviceName: string): string;
    static FixUrl(url: string, serviceName: string): string;
    static ShowPanelPrefUI(): void;
    static StorePanelPrefs(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    static kEnvironmentFamilies: string[];
    static kProductionEnv: number;
    static kCustomEnv: number;
    static kSvcEnvPref: string;
    static kSvcCustomUrlPref: string;
    static kSvcCustomPortPref: string;
  }
}
