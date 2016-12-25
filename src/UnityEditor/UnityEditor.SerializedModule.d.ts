declare namespace UnityEditor {
  class SerializedModule {
    // constructors
    constructor(o: UnityEditor.SerializedObject, name: string);
    // methods
    GetProperty0(name: string): UnityEditor.SerializedProperty;
    GetProperty(name: string): UnityEditor.SerializedProperty;
    GetProperty0(structName: string, propName: string): UnityEditor.SerializedProperty;
    GetProperty(structName: string, propName: string): UnityEditor.SerializedProperty;
    static Concat(a: string, b: string): string;
    GetUniqueModuleName(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
