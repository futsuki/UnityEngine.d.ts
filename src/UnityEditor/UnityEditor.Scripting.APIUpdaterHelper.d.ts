declare namespace UnityEditor.Scripting {
  class APIUpdaterHelper extends System.Object {
    // constructors
    constructor();
    // methods
    static IsReferenceToMissingObsoleteMember(namespaceName: string, className: string): boolean;
    static IsReferenceToTypeWithChangedNamespace(simpleOrQualifiedName: string): boolean;
    static Run(commaSeparatedListOfAssemblies: string): void;
    static DoesAssemblyRequireUpgrade(assemblyFullPath: string): boolean;
    // properties
    // fields
  }
}
