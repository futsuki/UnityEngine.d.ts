declare namespace UnityEditor {
  class IMGUIInstruction extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    // properties
    // fields
    type: UnityEditor.InstructionType;
    level: number;
    unclippedRect: any;
    stack: UnityEditor.StackFrame[];
    typeInstructionIndex: number;
  }
}
