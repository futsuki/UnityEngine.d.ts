declare namespace UnityEditor.VisualStudioIntegration {
  class ScriptingLanguage {
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
    static None: UnityEditor.VisualStudioIntegration.ScriptingLanguage;
    static Boo: UnityEditor.VisualStudioIntegration.ScriptingLanguage;
    static CSharp: UnityEditor.VisualStudioIntegration.ScriptingLanguage;
    static UnityScript: UnityEditor.VisualStudioIntegration.ScriptingLanguage;
  }
}
