declare namespace UnityEditor {
  class IMGUILayoutInstruction {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    level: number;
    unclippedRect: any;
    marginLeft: number;
    marginRight: number;
    marginTop: number;
    marginBottom: number;
    style: any;
    stack: UnityEditor.StackFrame[];
    isGroup: number;
    isVertical: number;
  }
}
