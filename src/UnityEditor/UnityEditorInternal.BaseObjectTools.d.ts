declare namespace UnityEditorInternal {
  class BaseObjectTools {
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
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
