declare namespace UnityEditor.Modules {
  class IPreferenceWindowExtension {
    // constructors
    protected constructor();
    // methods
    ReadPreferences(): void;
    WritePreferences(): void;
    HasExternalApplications(): boolean;
    ShowExternalApplications(): void;
    // properties
    // fields
  }
}
