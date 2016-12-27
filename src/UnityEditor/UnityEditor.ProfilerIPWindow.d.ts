declare namespace UnityEditor {
  class ProfilerIPWindow extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    static Show(buttonScreenRect: any): void;
    Show(): void;
    Show(immediateDisplay: boolean): void;
    static GetLastIPString(): string;
    // properties
    // fields
  }
}
