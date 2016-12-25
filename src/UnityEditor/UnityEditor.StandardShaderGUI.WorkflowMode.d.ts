declare namespace UnityEditor.StandardShaderGUI {
  class WorkflowMode {
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
    static Specular: UnityEditor.StandardShaderGUI.WorkflowMode;
    static Metallic: UnityEditor.StandardShaderGUI.WorkflowMode;
    static Dielectric: UnityEditor.StandardShaderGUI.WorkflowMode;
  }
}
