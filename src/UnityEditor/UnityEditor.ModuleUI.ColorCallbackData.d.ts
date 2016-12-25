declare namespace UnityEditor.ModuleUI {
  class ColorCallbackData {
    // constructors
    constructor(state: boolean, bp: UnityEditor.SerializedProperty);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    boolProp: UnityEditor.SerializedProperty;
    selectedState: boolean;
  }
}
