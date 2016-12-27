declare namespace UnityEditor {
  class PropertyDrawer extends UnityEditor.GUIDrawer {
    // constructors
    protected constructor();
    // methods
    OnGUI(position: any, property: UnityEditor.SerializedProperty, label: any): void;
    GetPropertyHeight(property: UnityEditor.SerializedProperty, label: any): number;
    // properties
    readonly attribute: any;
    readonly fieldInfo: any;
    // fields
  }
}
