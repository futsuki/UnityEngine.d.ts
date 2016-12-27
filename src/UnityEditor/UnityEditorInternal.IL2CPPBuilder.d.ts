declare namespace UnityEditorInternal {
  class IL2CPPBuilder extends System.Object {
    // constructors
    constructor(tempFolder: string, stagingAreaData: string, platformProvider: UnityEditorInternal.IIl2CppPlatformProvider, modifyOutputBeforeCompile: ((obj: string) => void), runtimeClassRegistry: UnityEditor.RuntimeClassRegistry, developmentBuild: boolean);
    // methods
    Run(): void;
    RunCompileAndLink(): void;
    GetCppOutputDirectoryInStagingArea(): string;
    static GetCppOutputPath(tempFolder: string): string;
    // properties
    // fields
  }
}
