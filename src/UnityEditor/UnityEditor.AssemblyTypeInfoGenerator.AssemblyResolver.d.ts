declare namespace UnityEditor.AssemblyTypeInfoGenerator {
  class AssemblyResolver {
    // constructors
    private constructor();
    // methods
    static WithSearchDirs(searchDirs: string[]): any;
    Resolve(name: any, parameters: any): any;
    AddSearchDirectory(directory: string): void;
    RemoveSearchDirectory(directory: string): void;
    GetSearchDirectories(): string[];
    Resolve(fullName: string): any;
    Resolve(fullName: string, parameters: any): any;
    Resolve(name: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
