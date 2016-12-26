declare namespace UnityEditor {
  class MonoCrossCompile {
    // constructors
    constructor();
    // methods
    static CrossCompileAOTDirectory(buildTarget: UnityEditor.BuildTarget, crossCompileOptions: UnityEditor.CrossCompileOptions, sourceAssembliesFolder: string, targetCrossCompiledASMFolder: string, additionalOptions: string): void;
    static CrossCompileAOTDirectory(buildTarget: UnityEditor.BuildTarget, crossCompileOptions: UnityEditor.CrossCompileOptions, sourceAssembliesFolder: string, targetCrossCompiledASMFolder: string, pathExtension: string, additionalOptions: string): void;
    static CrossCompileAOTDirectoryParallel(buildTarget: UnityEditor.BuildTarget, crossCompileOptions: UnityEditor.CrossCompileOptions, sourceAssembliesFolder: string, targetCrossCompiledASMFolder: string, additionalOptions: string): boolean;
    static CrossCompileAOTDirectoryParallel(buildTarget: UnityEditor.BuildTarget, crossCompileOptions: UnityEditor.CrossCompileOptions, sourceAssembliesFolder: string, targetCrossCompiledASMFolder: string, pathExtension: string, additionalOptions: string): boolean;
    static DisplayAOTProgressBar(totalFiles: number, filesFinished: number): void;
    static CrossCompileAOTDirectoryParallel(crossCompilerPath: string, buildTarget: UnityEditor.BuildTarget, crossCompileOptions: UnityEditor.CrossCompileOptions, sourceAssembliesFolder: string, targetCrossCompiledASMFolder: string, additionalOptions: string): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    static ArtifactsPath: string;
  }
}
