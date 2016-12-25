declare namespace UnityEditor.Scripting.Compilers.UWPReferences {
  class UWPExtension {
    // constructors
    constructor(manifest: string, referencesFolder: string);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Name: string;
    readonly References: string[];
    // fields
  }
}
