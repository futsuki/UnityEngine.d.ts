declare namespace UnityEditor {
  class KeyIdentifier extends System.Object {
    // constructors
    constructor(_curve: any, _curveId: number, _keyIndex: number);
    constructor(_curve: any, _curveId: number, _keyIndex: number, _binding: UnityEditor.EditorCurveBinding);
    // methods
    // properties
    readonly keyframe: any;
    // fields
    curve: any;
    curveId: number;
    key: number;
    binding: UnityEditor.EditorCurveBinding;
  }
}
