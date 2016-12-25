declare namespace UnityEditor.ModuleUI {
  class GradientCallbackData {
    // constructors
    constructor(state: UnityEditor.MinMaxGradientState, p: UnityEditor.SerializedMinMaxGradient);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    gradientProp: UnityEditor.SerializedMinMaxGradient;
    selectedState: UnityEditor.MinMaxGradientState;
  }
}
