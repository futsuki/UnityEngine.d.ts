declare namespace UnityEditor {
  class MonoAssemblyStripping {
    // constructors
    constructor();
    // methods
    static MonoCilStrip(buildTarget: UnityEditor.BuildTarget, managedLibrariesDirectory: string, fileNames: string[]): any;
    static GenerateBlackList(librariesFolder: string, usedClasses: UnityEditor.RuntimeClassRegistry, allAssemblies: string[]): string;
    static GenerateLinkXmlToPreserveDerivedTypes(stagingArea: string, librariesFolder: string, usedClasses: UnityEditor.RuntimeClassRegistry): string;
    static MonoLink(buildTarget: UnityEditor.BuildTarget, managedLibrariesDirectory: string, input: string[], allAssemblies: string[], usedClasses: UnityEditor.RuntimeClassRegistry): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
