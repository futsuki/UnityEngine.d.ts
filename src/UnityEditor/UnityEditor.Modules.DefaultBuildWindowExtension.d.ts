declare namespace UnityEditor.Modules {
  class DefaultBuildWindowExtension {
    // constructors
    constructor();
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
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
