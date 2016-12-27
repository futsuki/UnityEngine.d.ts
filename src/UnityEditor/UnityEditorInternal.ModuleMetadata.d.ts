declare namespace UnityEditorInternal {
  class ModuleMetadata extends System.Object {
    // constructors
    constructor();
    // methods
    static GetModuleNames(): string[];
    static GetModuleStrippable(moduleName: string): boolean;
    static GetModuleTypes(moduleName: string): UnityEditor.UnityType[];
    static GetModuleClasses(moduleName: string): number[];
    static GetICallModule(icall: string): string;
    // properties
    // fields
  }
}
