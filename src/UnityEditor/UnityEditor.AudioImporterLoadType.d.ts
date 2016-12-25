declare namespace UnityEditor {
  class AudioImporterLoadType {
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
    static DecompressOnLoad: UnityEditor.AudioImporterLoadType;
    static CompressedInMemory: UnityEditor.AudioImporterLoadType;
    static StreamFromDisc: UnityEditor.AudioImporterLoadType;
  }
}
