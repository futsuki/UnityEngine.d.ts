declare namespace UnityEditorInternal {
  class AnimationWindowKeyframe {
    // constructors
    constructor();
    constructor(key: UnityEditorInternal.AnimationWindowKeyframe);
    constructor(curve: UnityEditorInternal.AnimationWindowCurve, key: any);
    constructor(curve: UnityEditorInternal.AnimationWindowCurve, key: UnityEditor.ObjectReferenceKeyframe);
    // methods
    GetHash(): number;
    GetIndex(): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
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
