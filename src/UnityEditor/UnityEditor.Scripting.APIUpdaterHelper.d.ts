declare namespace UnityEditor.Scripting {
  class APIUpdaterHelper {
    // constructors
    constructor();
    // methods
    static IsReferenceToMissingObsoleteMember(namespaceName: string, className: string): boolean;
    static IsReferenceToTypeWithChangedNamespace(simpleOrQualifiedName: string): boolean;
    static Run(commaSeparatedListOfAssemblies: string): void;
    static DoesAssemblyRequireUpgrade(assemblyFullPath: string): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
