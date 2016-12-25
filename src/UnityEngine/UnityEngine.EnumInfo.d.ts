declare namespace UnityEngine {
  class EnumInfo {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    names: string[];
    values: number[];
    annotations: string[];
    isFlags: boolean;
    guiNames: UnityEngine.GUIContent[];
  }
}
