declare namespace UnityEditor {
  class XboxOneDeployMethod {
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
    static Push: UnityEditor.XboxOneDeployMethod;
    static Pull: UnityEditor.XboxOneDeployMethod;
    static RunFromPC: UnityEditor.XboxOneDeployMethod;
    static Package: UnityEditor.XboxOneDeployMethod;
    static PackageStreaming: UnityEditor.XboxOneDeployMethod;
  }
}
