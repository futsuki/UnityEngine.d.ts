declare namespace UnityEditor {
  class MetroCreateTestCertificateWindow extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    static Show(publisher: string): void;
    Show(): void;
    Show(immediateDisplay: boolean): void;
    OnGUI(): void;
    // properties
    // fields
  }
}
