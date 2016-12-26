declare namespace UnityEditor {
  class ExposeTransformEditor {
    // constructors
    constructor();
    // methods
    OnEnable(transformPaths: string[], serializedObject: UnityEditor.SerializedObject): void;
    OnGUI(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
