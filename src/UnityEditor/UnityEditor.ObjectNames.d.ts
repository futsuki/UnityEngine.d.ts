declare namespace UnityEditor {
  class ObjectNames {
    // constructors
    constructor();
    // methods
    static NicifyVariableName(name: string): string;
    static GetInspectorTitle(obj: any): string;
    static GetClassName(obj: any): string;
    static GetDragAndDropTitle(obj: any): string;
    static SetNameSmart(obj: any, name: string): void;
    static MangleVariableName(name: string): string;
    static GetPropertyEditorTitle(obj: any): string;
    static GetUniqueName(existingNames: string[], name: string): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
