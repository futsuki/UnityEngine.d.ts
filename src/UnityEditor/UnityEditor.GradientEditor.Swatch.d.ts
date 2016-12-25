declare namespace UnityEditor.GradientEditor {
  class Swatch {
    // constructors
    constructor(time: number, value: any, isAlpha: boolean);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    m_Time: number;
    m_Value: any;
    m_IsAlpha: boolean;
  }
}
