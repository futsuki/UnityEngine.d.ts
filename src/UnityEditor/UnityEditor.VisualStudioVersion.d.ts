declare namespace UnityEditor {
  class VisualStudioVersion {
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
    static Invalid: UnityEditor.VisualStudioVersion;
    static VisualStudio2008: UnityEditor.VisualStudioVersion;
    static VisualStudio2010: UnityEditor.VisualStudioVersion;
    static VisualStudio2012: UnityEditor.VisualStudioVersion;
    static VisualStudio2013: UnityEditor.VisualStudioVersion;
    static VisualStudio2015: UnityEditor.VisualStudioVersion;
    static VisualStudio15: UnityEditor.VisualStudioVersion;
  }
}
