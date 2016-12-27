declare namespace UnityEditor {
  class LicenseManagementWindow extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    static CheckForUpdates(): void;
    static ActivateNewLicense(): void;
    static ManualActivation(): void;
    static ReturnLicense(): void;
    // properties
    // fields
  }
}
