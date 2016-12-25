declare namespace UnityEngine {
  class ApplicationInstallMode {
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
    static Unknown: UnityEngine.ApplicationInstallMode;
    static Store: UnityEngine.ApplicationInstallMode;
    static DeveloperBuild: UnityEngine.ApplicationInstallMode;
    static Adhoc: UnityEngine.ApplicationInstallMode;
    static Enterprise: UnityEngine.ApplicationInstallMode;
    static Editor: UnityEngine.ApplicationInstallMode;
  }
}
