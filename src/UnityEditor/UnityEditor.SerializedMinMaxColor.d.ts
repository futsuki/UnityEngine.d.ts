declare namespace UnityEditor {
  class SerializedMinMaxColor {
    // constructors
    constructor(m: UnityEditor.SerializedModule);
    constructor(m: UnityEditor.SerializedModule, name: string);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    maxColor: UnityEditor.SerializedProperty;
    minColor: UnityEditor.SerializedProperty;
    minMax: UnityEditor.SerializedProperty;
  }
}
