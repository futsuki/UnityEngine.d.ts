declare namespace UnityEditor {
  class PropertyHandler {
    // constructors
    constructor();
    // methods
    HandleAttribute(attribute: any, field: any, propertyType: any): any;
    HandleDrawnType(drawnType: any, propertyType: any, field: any, attribute: any): any;
    OnGUI(position: any, property: UnityEditor.SerializedProperty, label: any, includeChildren: boolean): boolean;
    OnGUILayout(property: UnityEditor.SerializedProperty, label: any, includeChildren: boolean, options: any[]): boolean;
    GetHeight(property: UnityEditor.SerializedProperty, label: any, includeChildren: boolean): number;
    AddMenuItems(property: UnityEditor.SerializedProperty, menu: UnityEditor.GenericMenu): any;
    CallMenuCallback(targets: any[], method: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly hasPropertyDrawer: boolean;
    readonly empty: boolean;
    // fields
    tooltip: string;
    contextMenuItems: any;
  }
}
