declare namespace UnityEditor {
  class AnimationClipInfoProperties {
    // constructors
    constructor(prop: UnityEditor.SerializedProperty);
    // methods
    MaskNeedsUpdating(): boolean;
    MaskFromClip(mask: UnityEditor.Animations.AvatarMask): any;
    MaskToClip(mask: UnityEditor.Animations.AvatarMask): any;
    ClearCurves(): any;
    GetCurveCount(): number;
    GetCurveProperty(index: number): UnityEditor.SerializedProperty;
    GetCurveName(index: number): string;
    SetCurveName(index: number, name: string): any;
    GetCurve(index: number): any;
    SetCurve(index: number, curveValue: any): any;
    AddCurve(): any;
    RemoveCurve(index: number): any;
    GetEvent(index: number): any;
    SetEvent(index: number, animationEvent: any): any;
    ClearEvents(): any;
    GetEventCount(): number;
    AddEvent(time: number): any;
    RemoveEvent(index: number): any;
    SetEvents(newEvents: any[]): any;
    GetEvents(): any[];
    AssignToPreviewClip(clip: any): any;
    ExtractFromPreviewClip(clip: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    name: string;
    takeName: string;
    firstFrame: number;
    lastFrame: number;
    wrapMode: number;
    loop: boolean;
    orientationOffsetY: number;
    level: number;
    cycleOffset: number;
    additiveReferencePoseFrame: number;
    hasAdditiveReferencePose: boolean;
    loopTime: boolean;
    loopBlend: boolean;
    loopBlendOrientation: boolean;
    loopBlendPositionY: boolean;
    loopBlendPositionXZ: boolean;
    keepOriginalOrientation: boolean;
    keepOriginalPositionY: boolean;
    keepOriginalPositionXZ: boolean;
    heightFromFeet: boolean;
    mirror: boolean;
    maskType: UnityEditor.ClipAnimationMaskType;
    readonly maskTypeProperty: UnityEditor.SerializedProperty;
    maskSource: UnityEditor.Animations.AvatarMask;
    readonly maskSourceProperty: UnityEditor.SerializedProperty;
    readonly bodyMaskProperty: UnityEditor.SerializedProperty;
    readonly transformMaskProperty: UnityEditor.SerializedProperty;
    // fields
  }
}
