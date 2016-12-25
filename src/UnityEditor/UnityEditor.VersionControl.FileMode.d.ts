declare namespace UnityEditor.VersionControl {
  class FileMode {
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
    static None: UnityEditor.VersionControl.FileMode;
    static Binary: UnityEditor.VersionControl.FileMode;
    static Text: UnityEditor.VersionControl.FileMode;
  }
}
