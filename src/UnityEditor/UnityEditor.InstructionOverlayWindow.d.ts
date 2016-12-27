declare namespace UnityEditor {
  class InstructionOverlayWindow extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    SetTransparent(d: number): void;
    Show(view: UnityEditor.GUIView, instructionRect: any, style: any): void;
    Show(): void;
    Show(immediateDisplay: boolean): void;
    // properties
    // fields
  }
}
