declare namespace UnityEditor.Modules {
  class IPlatformSupportModule {
    // constructors
    private constructor();
    // methods
    GetDisplayNames(): any[];
    CreateBuildPostprocessor(): UnityEditor.Modules.IBuildPostprocessor;
    CreateScriptingImplementations(): UnityEditor.Modules.IScriptingImplementations;
    CreateSettingsEditorExtension(): UnityEditor.Modules.ISettingEditorExtension;
    CreatePreferenceWindowExtension(): UnityEditor.Modules.IPreferenceWindowExtension;
    CreateBuildWindowExtension(): UnityEditor.Modules.IBuildWindowExtension;
    CreateCompilationExtension(): UnityEditor.Modules.ICompilationExtension;
    CreateTextureImportSettingsExtension(): UnityEditor.Modules.ITextureImportSettingsExtension;
    CreatePluginImporterExtension(): UnityEditor.Modules.IPluginImporterExtension;
    CreateBuildAnalyzer(): UnityEditor.Modules.IBuildAnalyzer;
    CreateUserAssembliesValidatorExtension(): UnityEditor.Modules.IUserAssembliesValidator;
    CreateProjectGeneratorExtension(): UnityEditor.Modules.IProjectGeneratorExtension;
    RegisterAdditionalUnityExtensions(): void;
    CreateDevice(id: string): UnityEditor.Modules.IDevice;
    OnActivate(): void;
    OnDeactivate(): void;
    OnLoad(): void;
    OnUnload(): void;
    // properties
    readonly TargetName: string;
    readonly JamTarget: string;
    readonly NativeLibraries: string[];
    readonly AssemblyReferencesForUserScripts: string[];
    readonly AssemblyReferencesForEditorCsharpProject: string[];
    readonly ExtensionVersion: string;
    // fields
  }
}
