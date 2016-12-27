declare namespace UnityEditorInternal {
  class UnityEventDrawer extends UnityEditor.PropertyDrawer {
    // constructors
    constructor();
    // methods
    OnGUI(position: any, property: UnityEditor.SerializedProperty, label: any): void;
    OnGUI(position: any): void;
    GetPropertyHeight(property: UnityEditor.SerializedProperty, label: any): number;
    static IsPersistantListenerValid(dummyEvent: UnityEngine.Events.UnityEventBase, methodName: string, uObject: UnityEngine.Object, modeEnum: any, argumentType: any): boolean;
    // properties
    // fields
  }
}
