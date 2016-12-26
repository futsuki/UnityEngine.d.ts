declare namespace UnityEditor.Modules {
  class IPreferenceWindowExtension {
    // constructors
    private constructor();
    // methods
    ReadPreferences(): void;
    WritePreferences(): void;
    HasExternalApplications(): boolean;
    ShowExternalApplications(): void;
    // properties
    // fields
  }
}
