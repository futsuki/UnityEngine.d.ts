declare namespace UnityEditor {
  class MaterialPowerSliderDrawer extends UnityEditor.MaterialPropertyDrawer {
    // constructors
    constructor(power: number);
    // methods
    GetPropertyHeight(prop: UnityEditor.MaterialProperty, label: string, editor: UnityEditor.MaterialEditor): number;
    OnGUI(position: any, prop: UnityEditor.MaterialProperty, label: any, editor: UnityEditor.MaterialEditor): void;
    OnGUI(position: any, prop: UnityEditor.MaterialProperty, label: string, editor: UnityEditor.MaterialEditor): void;
    // properties
    // fields
  }
}
