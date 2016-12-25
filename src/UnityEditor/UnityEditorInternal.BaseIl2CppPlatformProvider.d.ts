declare namespace UnityEditorInternal {
  class BaseIl2CppPlatformProvider {
    // constructors
    constructor(target: UnityEditor.BuildTarget, libraryFolder: string);
    // methods
    CreateNativeCompiler(): INativeCompiler;
    CreateIl2CppNativeCodeBuilder(): UnityEditorInternal.Il2CppNativeCodeBuilder;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly target: UnityEditor.BuildTarget;
    readonly libraryFolder: string;
    readonly developmentMode: boolean;
    readonly emitNullChecks: boolean;
    readonly enableStackTraces: boolean;
    readonly enableArrayBoundsCheck: boolean;
    readonly enableDivideByZeroCheck: boolean;
    readonly loadSymbols: boolean;
    readonly supportsEngineStripping: boolean;
    readonly buildReport: UnityEditor.BuildReporting.BuildReport;
    readonly includePaths: string[];
    readonly libraryPaths: string[];
    readonly nativeLibraryFileName: string;
    readonly staticLibraryExtension: string;
    readonly il2CppFolder: string;
    readonly moduleStrippingInformationFolder: string;
    // fields
  }
}
