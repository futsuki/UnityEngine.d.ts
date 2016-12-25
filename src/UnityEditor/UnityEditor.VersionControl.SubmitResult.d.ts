declare namespace UnityEditor.VersionControl {
  class SubmitResult {
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
    static OK: UnityEditor.VersionControl.SubmitResult;
    static Error: UnityEditor.VersionControl.SubmitResult;
    static ConflictingFiles: UnityEditor.VersionControl.SubmitResult;
    static UnaddedFiles: UnityEditor.VersionControl.SubmitResult;
  }
}
