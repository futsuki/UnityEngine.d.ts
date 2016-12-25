declare namespace UnityEditor {
  class AnimationClipCurveData {
    // constructors
    constructor();
    constructor(binding: UnityEditor.EditorCurveBinding);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    path: string;
    type: any;
    propertyName: string;
    curve: any;
  }
}
