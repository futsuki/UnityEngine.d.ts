declare namespace UnityEditor.AssemblyTypeInfoGenerator {
  class AssemblyResolver extends Mono.Cecil.BaseAssemblyResolver {
    // constructors
    protected constructor();
    // methods
    static WithSearchDirs(searchDirs: string[]): any;
    Resolve(name: any, parameters: any): any;
    Resolve(fullName: string): any;
    Resolve(fullName: string, parameters: any): any;
    Resolve(name: any): any;
    // properties
    // fields
  }
}
