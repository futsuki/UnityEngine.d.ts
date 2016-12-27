declare namespace UnityEditorInternal {
  class BaseObjectTools extends System.Object {
    // constructors
    constructor();
    // methods
    static ClassIDToString(ID: number): string;
    static NamespaceFromClassID(ID: number): string;
    static StringToClassID(classString: string): number;
    static StringToClassIDCaseInsensitive(classString: string): number;
    static IsBaseObject(ID: number): boolean;
    static IsDerivedFromClassID(classID: number, derivedFromClassID: number): boolean;
    static GetSuperClassID(ID: number): number;
    // properties
    // fields
  }
}
