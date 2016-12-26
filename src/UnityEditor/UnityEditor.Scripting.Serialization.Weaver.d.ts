declare namespace UnityEditor.Scripting.Serialization {
  class Weaver {
    // constructors
    private constructor();
    // methods
    static ShouldWeave(name: string): boolean;
    static WeaveAssembliesInFolder(folder: string, playerPackage: string): void;
    static WeaveUnetFromEditor(assemblyPath: string, destPath: string, unityEngine: string, unityUNet: string, buildingForEditor: boolean): boolean;
    static WeaveInto(unityUNet: string, destPath: string, unityEngine: string, assemblyPath: string, extraAssemblyPaths: string[], assemblyResolver: any): boolean;
    static GetReferences(island: UnityEditor.Scripting.MonoIsland, projectDirectory: string): string[];
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
