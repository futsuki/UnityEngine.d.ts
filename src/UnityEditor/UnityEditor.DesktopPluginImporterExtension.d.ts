declare namespace UnityEditor {
  class DesktopPluginImporterExtension {
    // constructors
    constructor();
    // methods
    OnPlatformSettingsGUI(inspector: UnityEditor.PluginImporterInspector): any;
    ValidateSingleCPUTargets(inspector: UnityEditor.PluginImporterInspector): any;
    CalculateFinalPluginPath(platformName: string, imp: UnityEditor.PluginImporter): string;
    ResetValues(inspector: UnityEditor.PluginImporterInspector): any;
    HasModified(inspector: UnityEditor.PluginImporterInspector): boolean;
    Apply(inspector: UnityEditor.PluginImporterInspector): any;
    OnEnable(inspector: UnityEditor.PluginImporterInspector): any;
    OnDisable(inspector: UnityEditor.PluginImporterInspector): any;
    CheckFileCollisions(buildTargetName: string): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
