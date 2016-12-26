declare namespace UnityEditorInternal {
  class Il2CppNativeCodeBuilderUtils {
    // constructors
    private constructor();
    // methods
    static AddBuilderArguments(builder: UnityEditorInternal.Il2CppNativeCodeBuilder, outputRelativePath: string, includeRelativePaths: any): any;
    static ClearAndPrepareCacheDirectory(builder: UnityEditorInternal.Il2CppNativeCodeBuilder): void;
    static ClearCacheIfEditorVersionDiffers(builder: UnityEditorInternal.Il2CppNativeCodeBuilder, currentEditorVersion: string): void;
    static PrepareCacheDirectory(builder: UnityEditorInternal.Il2CppNativeCodeBuilder, currentEditorVersion: string): void;
    static ObjectFilePathInCacheDirectoryFor(builderCacheDirectory: string): string;
    // properties
    // fields
  }
}
