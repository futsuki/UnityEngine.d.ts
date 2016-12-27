declare namespace UnityEditor.Modules {
  class IPluginImporterExtension {
    // constructors
    protected constructor();
    // methods
    ResetValues(inspector: UnityEditor.PluginImporterInspector): void;
    HasModified(inspector: UnityEditor.PluginImporterInspector): boolean;
    Apply(inspector: UnityEditor.PluginImporterInspector): void;
    OnEnable(inspector: UnityEditor.PluginImporterInspector): void;
    OnDisable(inspector: UnityEditor.PluginImporterInspector): void;
    OnPlatformSettingsGUI(inspector: UnityEditor.PluginImporterInspector): void;
    CalculateFinalPluginPath(buildTargetName: string, imp: UnityEditor.PluginImporter): string;
    CheckFileCollisions(buildTargetName: string): boolean;
    // properties
    // fields
  }
}
