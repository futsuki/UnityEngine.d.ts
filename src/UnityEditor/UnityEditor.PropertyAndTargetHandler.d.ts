declare namespace UnityEditor {
  class PropertyAndTargetHandler {
    // constructors
    constructor(property: UnityEditor.SerializedProperty, target: any, function_: UnityEditor.TargetChoiceHandler.TargetChoiceMenuFunction);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    property: UnityEditor.SerializedProperty;
    target: any;
    "function": UnityEditor.TargetChoiceHandler.TargetChoiceMenuFunction;
  }
}
