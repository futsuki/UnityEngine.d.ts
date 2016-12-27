declare namespace UnityEditor {
  class MonoAOTRegistration extends System.Object {
    // constructors
    constructor();
    // methods
    static BuildReferencedTypeList(assemblies: any[]): any;
    static WriteCPlusPlusFileForStaticAOTModuleRegistration(buildTarget: UnityEditor.BuildTarget, file: string, crossCompileOptions: UnityEditor.CrossCompileOptions, advancedLic: boolean, targetDevice: string, stripping: boolean, usedClassRegistry: UnityEditor.RuntimeClassRegistry, checker: UnityEditor.AssemblyReferenceChecker, stagingAreaDataManaged: string): void;
    static ResolveReferencedUnityEngineClassesFromMono(assemblies: any[], unityEngine: any, res: UnityEditor.RuntimeClassRegistry): void;
    static ResolveDefinedNativeClassesFromMono(assemblies: any[], res: UnityEditor.RuntimeClassRegistry): void;
    static GenerateRegisterModules(nativeClasses: any, nativeModules: any, output: any, strippingEnabled: boolean): void;
    static GenerateRegisterClassesForStripping(nativeClassesAndBaseClasses: any, output: any): void;
    static GenerateRegisterClasses(allClasses: any, output: any): void;
    static GenerateRegisterInternalCalls(assemblies: any[], output: any): void;
    // properties
    // fields
  }
}
