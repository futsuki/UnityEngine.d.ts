declare namespace UnityEditor {
  class IMGUIClipInstruction extends System.ValueType {
    // constructors
    protected constructor();
    // methods
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
