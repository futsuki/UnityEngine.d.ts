declare namespace UnityEngine {
  class RuntimeUndo {
    // constructors
    constructor();
    // methods
    static SetTransformParent(transform: UnityEngine.Transform, newParent: UnityEngine.Transform, name: string): any;
    static RecordObject(objectToUndo: UnityEngine.Object, name: string): any;
    static RecordObjects(objectsToUndo: UnityEngine.Object[], name: string): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
