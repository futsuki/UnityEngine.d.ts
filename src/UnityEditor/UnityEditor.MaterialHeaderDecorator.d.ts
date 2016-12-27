declare namespace UnityEditor {
  class MaterialHeaderDecorator extends UnityEditor.MaterialPropertyDrawer {
    // constructors
    constructor(header: string);
    constructor(headerAsNumber: number);
    // methods
    GetPropertyHeight(prop: UnityEditor.MaterialProperty, label: string, editor: UnityEditor.MaterialEditor): number;
    OnGUI(position: any, prop: UnityEditor.MaterialProperty, label: string, editor: UnityEditor.MaterialEditor): void;
    OnGUI(position: any, prop: UnityEditor.MaterialProperty, label: any, editor: UnityEditor.MaterialEditor): void;
    // properties
    // fields
  }
}
