declare namespace UnityEditor.EditorPluginImporterExtension {
  class EditorPluginCPUArchitecture {
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
    static AnyCPU: UnityEditor.EditorPluginImporterExtension.EditorPluginCPUArchitecture;
    static x86: UnityEditor.EditorPluginImporterExtension.EditorPluginCPUArchitecture;
    static x86_64: UnityEditor.EditorPluginImporterExtension.EditorPluginCPUArchitecture;
  }
}
