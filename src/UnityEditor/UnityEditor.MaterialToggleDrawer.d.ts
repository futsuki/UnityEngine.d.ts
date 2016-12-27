declare namespace UnityEditor {
  class MaterialToggleDrawer extends UnityEditor.MaterialPropertyDrawer {
    // constructors
    constructor();
    constructor(keyword: string);
    // methods
    GetPropertyHeight(prop: UnityEditor.MaterialProperty, label: string, editor: UnityEditor.MaterialEditor): number;
    OnGUI(position: any, prop: UnityEditor.MaterialProperty, label: any, editor: UnityEditor.MaterialEditor): void;
    OnGUI(position: any, prop: UnityEditor.MaterialProperty, label: string, editor: UnityEditor.MaterialEditor): void;
    Apply(prop: UnityEditor.MaterialProperty): void;
    // properties
    // fields
  }
}
