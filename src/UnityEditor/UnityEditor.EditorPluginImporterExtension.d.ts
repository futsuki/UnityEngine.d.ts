declare namespace UnityEditor {
  class EditorPluginImporterExtension {
    // constructors
    constructor();
    // methods
    ResetValues(inspector: UnityEditor.PluginImporterInspector): void;
    HasModified(inspector: UnityEditor.PluginImporterInspector): boolean;
    Apply(inspector: UnityEditor.PluginImporterInspector): void;
    OnEnable(inspector: UnityEditor.PluginImporterInspector): void;
    OnDisable(inspector: UnityEditor.PluginImporterInspector): void;
    OnPlatformSettingsGUI(inspector: UnityEditor.PluginImporterInspector): void;
    CalculateFinalPluginPath(platformName: string, imp: UnityEditor.PluginImporter): string;
    CheckFileCollisions(buildTargetName: string): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
