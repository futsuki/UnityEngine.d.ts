declare namespace UnityEditor {
  class MaterialPropertyHandler {
    // constructors
    constructor();
    // methods
    IsEmpty(): boolean;
    OnGUI(position: any, prop: UnityEditor.MaterialProperty, label: any, editor: UnityEditor.MaterialEditor): void;
    GetPropertyHeight(prop: UnityEditor.MaterialProperty, label: string, editor: UnityEditor.MaterialEditor): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly propertyDrawer: UnityEditor.MaterialPropertyDrawer;
    // fields
  }
}
