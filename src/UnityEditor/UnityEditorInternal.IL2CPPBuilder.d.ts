declare namespace UnityEditorInternal {
  class IL2CPPBuilder {
    // constructors
    constructor(tempFolder: string, stagingAreaData: string, platformProvider: UnityEditorInternal.IIl2CppPlatformProvider, modifyOutputBeforeCompile: ((string) => void), runtimeClassRegistry: UnityEditor.RuntimeClassRegistry, developmentBuild: boolean);
    // methods
    Run(): void;
    RunCompileAndLink(): void;
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
