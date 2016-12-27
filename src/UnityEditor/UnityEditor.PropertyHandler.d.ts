declare namespace UnityEditor {
  class PropertyHandler extends System.Object {
    // constructors
    constructor();
    // methods
    HandleAttribute(attribute: any, field: any, propertyType: any): void;
    HandleDrawnType(drawnType: any, propertyType: any, field: any, attribute: any): void;
    OnGUI(position: any, property: UnityEditor.SerializedProperty, label: any, includeChildren: boolean): boolean;
    OnGUILayout(property: UnityEditor.SerializedProperty, label: any, includeChildren: boolean, options: any[]): boolean;
    GetHeight(property: UnityEditor.SerializedProperty, label: any, includeChildren: boolean): number;
    AddMenuItems(property: UnityEditor.SerializedProperty, menu: UnityEditor.GenericMenu): void;
    CallMenuCallback(targets: any[], method: any): void;
    // properties
    readonly hasPropertyDrawer: boolean;
    readonly empty: boolean;
    // fields
    tooltip: string;
    contextMenuItems: any[];
  }
}
