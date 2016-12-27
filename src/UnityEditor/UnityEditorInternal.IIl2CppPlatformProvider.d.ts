declare namespace UnityEditorInternal {
  class IIl2CppPlatformProvider {
    // constructors
    protected constructor();
    // methods
    CreateNativeCompiler(): INativeCompiler;
    CreateIl2CppNativeCodeBuilder(): UnityEditorInternal.Il2CppNativeCodeBuilder;
    // properties
    readonly target: UnityEditor.BuildTarget;
    readonly emitNullChecks: boolean;
    readonly enableStackTraces: boolean;
    readonly enableArrayBoundsCheck: boolean;
    readonly enableDivideByZeroCheck: boolean;
    readonly loadSymbols: boolean;
    readonly nativeLibraryFileName: string;
    readonly il2CppFolder: string;
    readonly developmentMode: boolean;
    readonly moduleStrippingInformationFolder: string;
    readonly supportsEngineStripping: boolean;
    readonly buildReport: UnityEditor.BuildReporting.BuildReport;
    readonly includePaths: string[];
    readonly libraryPaths: string[];
    // fields
  }
}
