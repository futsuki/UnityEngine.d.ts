declare namespace UnityEditor {
  class MaterialPropertyHandler extends System.Object {
    // constructors
    constructor();
    // methods
    IsEmpty(): boolean;
    OnGUI(position: any, prop: UnityEditor.MaterialProperty, label: any, editor: UnityEditor.MaterialEditor): void;
    GetPropertyHeight(prop: UnityEditor.MaterialProperty, label: string, editor: UnityEditor.MaterialEditor): number;
    // properties
    readonly propertyDrawer: UnityEditor.MaterialPropertyDrawer;
    // fields
  }
}
