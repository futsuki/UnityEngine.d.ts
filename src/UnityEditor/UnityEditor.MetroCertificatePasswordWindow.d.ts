declare namespace UnityEditor {
  class MetroCertificatePasswordWindow extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    static Show(path: string): void;
    Show(): void;
    Show(immediateDisplay: boolean): void;
    OnGUI(): void;
    // properties
    // fields
  }
}
