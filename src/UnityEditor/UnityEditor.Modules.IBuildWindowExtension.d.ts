declare namespace UnityEditor.Modules {
  class IBuildWindowExtension {
    // constructors
    private constructor();
    // methods
    ShowPlatformBuildOptions(): void;
    ShowInternalPlatformBuildOptions(): void;
    EnabledBuildButton(): boolean;
    EnabledBuildAndRunButton(): boolean;
    ShouldDrawScriptDebuggingCheckbox(): boolean;
    ShouldDrawProfilerCheckbox(): boolean;
    ShouldDrawDevelopmentPlayerCheckbox(): boolean;
    ShouldDrawExplicitNullCheckbox(): boolean;
    ShouldDrawExplicitDivideByZeroCheckbox(): boolean;
    ShouldDrawForceOptimizeScriptsCheckbox(): boolean;
    // properties
    // fields
  }
}
