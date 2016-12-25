declare namespace UnityEditor {
  class MonoAOTRegistration {
    // constructors
    constructor();
    // methods
    static BuildReferencedTypeList(assemblies: any[]): any;
    static WriteCPlusPlusFileForStaticAOTModuleRegistration(buildTarget: UnityEditor.BuildTarget, file: string, crossCompileOptions: UnityEditor.CrossCompileOptions, advancedLic: boolean, targetDevice: string, stripping: boolean, usedClassRegistry: UnityEditor.RuntimeClassRegistry, checker: UnityEditor.AssemblyReferenceChecker, stagingAreaDataManaged: string): any;
    static ResolveReferencedUnityEngineClassesFromMono(assemblies: any[], unityEngine: any, res: UnityEditor.RuntimeClassRegistry): any;
    static ResolveDefinedNativeClassesFromMono(assemblies: any[], res: UnityEditor.RuntimeClassRegistry): any;
    static GenerateRegisterModules(nativeClasses: any, nativeModules: any, output: any, strippingEnabled: boolean): any;
    static GenerateRegisterClassesForStripping(nativeClassesAndBaseClasses: any, output: any): any;
    static GenerateRegisterClasses(allClasses: any, output: any): any;
    static GenerateRegisterInternalCalls(assemblies: any[], output: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
