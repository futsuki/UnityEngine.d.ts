declare namespace UnityEditor {
  class DelayedDrawer {
    // constructors
    constructor();
    // methods
    OnGUI(position: any, property: UnityEditor.SerializedProperty, label: any): any;
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
