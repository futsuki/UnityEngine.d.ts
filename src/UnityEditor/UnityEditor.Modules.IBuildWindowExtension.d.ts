declare namespace UnityEditor.Modules {
  class IBuildWindowExtension {
    // constructors
    protected constructor();
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
