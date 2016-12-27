declare namespace UnityEditor {
  class DesktopPluginImporterExtension extends UnityEditor.Modules.DefaultPluginImporterExtension {
    // constructors
    constructor();
    // methods
    OnPlatformSettingsGUI(inspector: UnityEditor.PluginImporterInspector): void;
    ValidateSingleCPUTargets(inspector: UnityEditor.PluginImporterInspector): void;
    CalculateFinalPluginPath(platformName: string, imp: UnityEditor.PluginImporter): string;
    // properties
    // fields
  }
}
