declare namespace UnityEditor.GUIViewDebuggerWindow {
  class InstructionType {
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
    static Draw: UnityEditor.GUIViewDebuggerWindow.InstructionType;
    static Clip: UnityEditor.GUIViewDebuggerWindow.InstructionType;
    static Layout: UnityEditor.GUIViewDebuggerWindow.InstructionType;
    static Unified: UnityEditor.GUIViewDebuggerWindow.InstructionType;
  }
}
