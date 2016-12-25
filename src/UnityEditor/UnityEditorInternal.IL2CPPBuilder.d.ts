declare namespace UnityEditorInternal {
  class IL2CPPBuilder {
    // constructors
    constructor(tempFolder: string, stagingAreaData: string, platformProvider: UnityEditorInternal.IIl2CppPlatformProvider, modifyOutputBeforeCompile: any, runtimeClassRegistry: UnityEditor.RuntimeClassRegistry, developmentBuild: boolean);
    // methods
    Run(): any;
    RunCompileAndLink(): any;
    GetCppOutputDirectoryInStagingArea(): string;
    static GetCppOutputPath(tempFolder: string): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
