declare namespace UnityEditor {
  class IMGUIInstruction {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    type: UnityEditor.InstructionType;
    level: number;
    unclippedRect: any;
    stack: UnityEditor.StackFrame[];
    typeInstructionIndex: number;
  }
}
