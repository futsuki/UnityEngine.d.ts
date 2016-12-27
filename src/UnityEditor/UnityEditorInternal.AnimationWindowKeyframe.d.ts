declare namespace UnityEditorInternal {
  class AnimationWindowKeyframe extends System.Object {
    // constructors
    constructor();
    constructor(key: UnityEditorInternal.AnimationWindowKeyframe);
    constructor(curve: UnityEditorInternal.AnimationWindowCurve, key: any);
    constructor(curve: UnityEditorInternal.AnimationWindowCurve, key: UnityEditor.ObjectReferenceKeyframe);
    // methods
    GetHash(): number;
    GetIndex(): number;
    // properties
    time: number;
    value: any;
    inTangent: number;
    outTangent: number;
    curve: UnityEditorInternal.AnimationWindowCurve;
    readonly isPPtrCurve: boolean;
    // fields
    m_InTangent: number;
    m_OutTangent: number;
    m_TangentMode: number;
    m_TimeHash: number;
  }
}
