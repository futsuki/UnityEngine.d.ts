declare namespace UnityEditor {
  class GUIViewDebuggerHelper extends System.Object {
    // constructors
    constructor();
    // methods
    static GetRectFromInstruction(instructionIndex: number): any;
    static GetStyleFromInstruction(instructionIndex: number): any;
    static GetManagedStackTrace(instructionIndex: number): UnityEditor.StackFrame[];
    // properties
    // fields
  }
}
