declare namespace UnityEditor.EditorGUI {
  class ObjectFieldValidator {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(references: any[], objType: any, property: UnityEditor.SerializedProperty): any;
    BeginInvoke(references: any[], objType: any, property: UnityEditor.SerializedProperty, callback: any, object: any): any;
    EndInvoke(result: any): any;
    GetObjectData(info: any, context: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetInvocationList(): any[];
    DynamicInvoke(args: any[]): any;
    Clone(): any;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Method: any;
    readonly Target: any;
    // fields
  }
}
