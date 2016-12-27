declare namespace UnityEditor {
  class PropertyAndTargetHandler extends System.Object {
    // constructors
    constructor(property: UnityEditor.SerializedProperty, target: UnityEngine.Object, function_: ((property: UnityEditor.SerializedProperty, target: UnityEngine.Object) => void));
    // methods
    // properties
    // fields
    property: UnityEditor.SerializedProperty;
    target: UnityEngine.Object;
    "function": ((property: UnityEditor.SerializedProperty, target: UnityEngine.Object) => void);
  }
}
