declare namespace UnityEditor {
  class IMGUIClipInstruction {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    screenRect: any;
    unclippedScreenRect: any;
    scrollOffset: any;
    renderOffset: any;
    resetOffset: boolean;
    level: number;
    pushStacktrace: UnityEditor.StackFrame[];
    popStacktrace: UnityEditor.StackFrame[];
  }
}
