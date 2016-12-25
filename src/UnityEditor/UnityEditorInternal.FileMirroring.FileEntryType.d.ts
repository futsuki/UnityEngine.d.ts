declare namespace UnityEditorInternal.FileMirroring {
  class FileEntryType {
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
    static File: UnityEditorInternal.FileMirroring.FileEntryType;
    static Directory: UnityEditorInternal.FileMirroring.FileEntryType;
    static NotExisting: UnityEditorInternal.FileMirroring.FileEntryType;
  }
}
