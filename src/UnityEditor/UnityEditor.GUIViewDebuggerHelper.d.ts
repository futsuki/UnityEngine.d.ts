declare namespace UnityEditor {
  class GUIViewDebuggerHelper {
    // constructors
    constructor();
    // methods
    static GetRectFromInstruction(instructionIndex: number): any;
    static GetStyleFromInstruction(instructionIndex: number): any;
    static GetManagedStackTrace(instructionIndex: number): UnityEditor.StackFrame[];
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
