declare namespace Mono.Cecil {
  class BaseAssemblyResolver extends System.Object {
    // constructors
    protected constructor();
    // methods
    AddSearchDirectory(directory: string): void;
    RemoveSearchDirectory(directory: string): void;
    GetSearchDirectories(): string[];
    Resolve(fullName: string): any;
    Resolve(fullName: string, parameters: any): any;
    Resolve(name: any): any;
    Resolve(name: any, parameters: any): any;
    // properties
    // fields
  }
}
