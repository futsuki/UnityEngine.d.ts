declare namespace UnityEditorInternal {
  class ModuleMetadata {
    // constructors
    constructor();
    // methods
    static GetModuleNames(): string[];
    static GetModuleStrippable(moduleName: string): boolean;
    static GetModuleTypes(moduleName: string): UnityEditor.UnityType[];
    static GetModuleClasses(moduleName: string): number[];
    static GetICallModule(icall: string): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
