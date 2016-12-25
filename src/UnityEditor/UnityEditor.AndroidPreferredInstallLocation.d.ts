declare namespace UnityEditor {
  class AndroidPreferredInstallLocation {
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
    static Auto: UnityEditor.AndroidPreferredInstallLocation;
    static PreferExternal: UnityEditor.AndroidPreferredInstallLocation;
    static ForceInternal: UnityEditor.AndroidPreferredInstallLocation;
  }
}
