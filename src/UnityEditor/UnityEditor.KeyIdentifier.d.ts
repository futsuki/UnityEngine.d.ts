declare namespace UnityEditor {
  class KeyIdentifier {
    // constructors
    constructor(_curve: any, _curveId: number, _keyIndex: number);
    constructor(_curve: any, _curveId: number, _keyIndex: number, _binding: UnityEditor.EditorCurveBinding);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly keyframe: any;
    // fields
    curve: any;
    curveId: number;
    key: number;
    binding: UnityEditor.EditorCurveBinding;
  }
}
