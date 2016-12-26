declare namespace UnityEditorInternal {
  class AnimationWindowCurve {
    // constructors
    constructor(clip: any, binding: UnityEditor.EditorCurveBinding, valueType: any);
    // methods
    LoadKeyframes(clip: any): void;
    GetHashCode(): number;
    CompareTo(obj: UnityEditorInternal.AnimationWindowCurve): number;
    ToAnimationCurve(): any;
    ToObjectCurve(): UnityEditor.ObjectReferenceKeyframe[];
    FindKeyAtTime(keyTime: UnityEditorInternal.AnimationKeyTime): UnityEditorInternal.AnimationWindowKeyframe;
    Evaluate(time: number): any;
    AddKeyframe(key: UnityEditorInternal.AnimationWindowKeyframe, keyTime: UnityEditorInternal.AnimationKeyTime): void;
    RemoveKeyframe(time: UnityEditorInternal.AnimationKeyTime): void;
    HasKeyframe(time: UnityEditorInternal.AnimationKeyTime): boolean;
    GetKeyframeIndex(time: UnityEditorInternal.AnimationKeyTime): number;
    RemoveKeysAtRange(startTime: number, endTime: number): void;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    readonly binding: UnityEditor.EditorCurveBinding;
    readonly isPPtrCurve: boolean;
    readonly isPhantom: boolean;
    readonly propertyName: string;
    readonly path: string;
    readonly type: any;
    readonly valueType: any;
    readonly length: number;
    readonly depth: number;
    readonly clip: any;
    readonly rootGameObject: any;
    readonly scriptableObject: any;
    readonly timeOffset: number;
    readonly clipIsEditable: boolean;
    readonly animationIsEditable: boolean;
    readonly selectionID: number;
    selectionBinding: UnityEditorInternal.AnimationWindowSelectionItem;
    // fields
    static timeEpsilon: number;
    m_Keyframes: any;
  }
}
