declare namespace UnityEditor {
  class MultilineDrawer extends UnityEditor.PropertyDrawer {
    // constructors
    constructor();
    // methods
    OnGUI(position: any, property: UnityEditor.SerializedProperty, label: any): void;
    GetPropertyHeight(property: UnityEditor.SerializedProperty, label: any): number;
    // properties
    // fields
  }
}
