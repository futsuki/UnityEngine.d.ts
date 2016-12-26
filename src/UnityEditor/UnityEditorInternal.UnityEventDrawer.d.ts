declare namespace UnityEditorInternal {
  class UnityEventDrawer {
    // constructors
    constructor();
    // methods
    OnGUI(position: any, property: UnityEditor.SerializedProperty, label: any): void;
    GetPropertyHeight(property: UnityEditor.SerializedProperty, label: any): number;
    OnGUI(position: any): void;
    static IsPersistantListenerValid(dummyEvent: any, methodName: string, uObject: any, modeEnum: any, argumentType: any): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly attribute: any;
    readonly fieldInfo: any;
    // fields
  }
}
