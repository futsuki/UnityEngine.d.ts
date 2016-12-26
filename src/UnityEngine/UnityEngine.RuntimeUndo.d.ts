declare namespace UnityEngine {
  class RuntimeUndo {
    // constructors
    constructor();
    // methods
    static SetTransformParent(transform: UnityEngine.Transform, newParent: UnityEngine.Transform, name: string): void;
    static RecordObject(objectToUndo: UnityEngine.Object, name: string): void;
    static RecordObjects(objectsToUndo: UnityEngine.Object[], name: string): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
