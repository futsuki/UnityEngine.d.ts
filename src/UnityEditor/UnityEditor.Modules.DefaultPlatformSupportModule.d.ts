declare namespace UnityEditor.Modules {
  class DefaultPlatformSupportModule {
    // constructors
    private constructor();
    // methods
    GetDisplayNames(): any[];
    CreateBuildAnalyzer(): UnityEditor.Modules.IBuildAnalyzer;
    CreateBuildPostprocessor(): UnityEditor.Modules.IBuildPostprocessor;
    CreateScriptingImplementations(): UnityEditor.Modules.IScriptingImplementations;
    CreateSettingsEditorExtension(): UnityEditor.Modules.ISettingEditorExtension;
    CreatePreferenceWindowExtension(): UnityEditor.Modules.IPreferenceWindowExtension;
    CreateTextureImportSettingsExtension(): UnityEditor.Modules.ITextureImportSettingsExtension;
    CreateBuildWindowExtension(): UnityEditor.Modules.IBuildWindowExtension;
    CreateCompilationExtension(): UnityEditor.Modules.ICompilationExtension;
    CreatePluginImporterExtension(): UnityEditor.Modules.IPluginImporterExtension;
    CreateUserAssembliesValidatorExtension(): UnityEditor.Modules.IUserAssembliesValidator;
    CreateProjectGeneratorExtension(): UnityEditor.Modules.IProjectGeneratorExtension;
    RegisterAdditionalUnityExtensions(): void;
    CreateDevice(id: string): UnityEditor.Modules.IDevice;
    OnActivate(): void;
    OnDeactivate(): void;
    OnLoad(): void;
    OnUnload(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly TargetName: string;
    readonly JamTarget: string;
    readonly ExtensionVersion: string;
    readonly NativeLibraries: string[];
    readonly AssemblyReferencesForUserScripts: string[];
    readonly AssemblyReferencesForEditorCsharpProject: string[];
    // fields
  }
}
