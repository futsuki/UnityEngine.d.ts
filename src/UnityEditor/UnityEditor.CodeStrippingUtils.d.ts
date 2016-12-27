declare namespace UnityEditor {
  class CodeStrippingUtils extends System.Object {
    // constructors
    constructor();
    // methods
    static GetModulesFromICalls(icallsListFile: string): any;
    static InjectCustomDependencies(strippingInfo: UnityEditor.BuildReporting.StrippingInfo, nativeClasses: any): void;
    static GenerateDependencies(strippedAssemblyDir: string, icallsListFile: string, rcr: UnityEditor.RuntimeClassRegistry, doStripping: boolean, nativeClasses: any, nativeModules: any, platformProvider: UnityEditorInternal.IIl2CppPlatformProvider): void;
    static GetModuleWhitelist(module: string, moduleStrippingInformationFolder: string): string;
    static GetDependentModules(moduleXml: string): string[];
    static WriteModuleAndClassRegistrationFile(strippedAssemblyDir: string, icallsListFile: string, outputDir: string, rcr: UnityEditor.RuntimeClassRegistry, classesToSkip: any, platformProvider: UnityEditorInternal.IIl2CppPlatformProvider): void;
    static GetNativeModulesToRegister(nativeClasses: any, strippingInfo: UnityEditor.BuildReporting.StrippingInfo): any;
    // properties
    static readonly BlackListNativeClasses: UnityEditor.UnityType[];
    static readonly BlackListNativeClassesDependency: any;
    static readonly UserAssemblies: string[];
    // fields
  }
}
