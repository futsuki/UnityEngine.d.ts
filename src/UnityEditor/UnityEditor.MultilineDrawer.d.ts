declare namespace UnityEditor {
  class MultilineDrawer {
    // constructors
    constructor();
    // methods
    OnGUI(position: any, property: UnityEditor.SerializedProperty, label: any): void;
    GetPropertyHeight(property: UnityEditor.SerializedProperty, label: any): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly attribute: any;
    readonly fieldInfo: any;
    // fields
  }
}
