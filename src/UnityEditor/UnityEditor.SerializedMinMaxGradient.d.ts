declare namespace UnityEditor {
  class SerializedMinMaxGradient {
    // constructors
    constructor(m: UnityEditor.SerializedModule);
    constructor(m: UnityEditor.SerializedModule, name: string);
    // methods
    static GetGradientAsColor(gradientProp: UnityEditor.SerializedProperty): any;
    static SetGradientAsColor(gradientProp: UnityEditor.SerializedProperty, color: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    state: UnityEditor.MinMaxGradientState;
    // fields
    m_MaxGradient: UnityEditor.SerializedProperty;
    m_MinGradient: UnityEditor.SerializedProperty;
    m_MaxColor: UnityEditor.SerializedProperty;
    m_MinColor: UnityEditor.SerializedProperty;
    m_AllowColor: boolean;
    m_AllowGradient: boolean;
    m_AllowRandomBetweenTwoColors: boolean;
    m_AllowRandomBetweenTwoGradients: boolean;
    m_AllowRandomColor: boolean;
  }
}
