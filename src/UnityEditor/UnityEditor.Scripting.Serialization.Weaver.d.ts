declare namespace UnityEditor.Scripting.Serialization {
  class Weaver extends System.Object {
    // constructors
    protected constructor();
    // methods
    static ShouldWeave(name: string): boolean;
    static WeaveAssembliesInFolder(folder: string, playerPackage: string): void;
    static WeaveUnetFromEditor(assemblyPath: string, destPath: string, unityEngine: string, unityUNet: string, buildingForEditor: boolean): boolean;
    static WeaveInto(unityUNet: string, destPath: string, unityEngine: string, assemblyPath: string, extraAssemblyPaths: string[], assemblyResolver: any): boolean;
    static GetReferences(island: UnityEditor.Scripting.MonoIsland, projectDirectory: string): string[];
    // properties
    // fields
  }
}
