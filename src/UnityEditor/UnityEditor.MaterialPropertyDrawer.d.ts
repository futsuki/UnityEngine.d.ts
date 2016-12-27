declare namespace UnityEditor {
  class MaterialPropertyDrawer extends System.Object {
    // constructors
    protected constructor();
    // methods
    OnGUI(position: any, prop: UnityEditor.MaterialProperty, label: any, editor: UnityEditor.MaterialEditor): void;
    OnGUI(position: any, prop: UnityEditor.MaterialProperty, label: string, editor: UnityEditor.MaterialEditor): void;
    GetPropertyHeight(prop: UnityEditor.MaterialProperty, label: string, editor: UnityEditor.MaterialEditor): number;
    Apply(prop: UnityEditor.MaterialProperty): void;
    // properties
    // fields
  }
}
