declare namespace UnityEditor.VersionControl.Message {
  class Severity {
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
    static Data: UnityEditor.VersionControl.Message.Severity;
    static Verbose: UnityEditor.VersionControl.Message.Severity;
    static Info: UnityEditor.VersionControl.Message.Severity;
    static Warning: UnityEditor.VersionControl.Message.Severity;
    static Error: UnityEditor.VersionControl.Message.Severity;
  }
}
