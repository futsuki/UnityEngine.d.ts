declare namespace UnityEditor {
  class AnimationClipInfoProperties {
    // constructors
    constructor(prop: UnityEditor.SerializedProperty);
    // methods
    MaskNeedsUpdating(): boolean;
    MaskFromClip(mask: UnityEditor.Animations.AvatarMask): void;
    MaskToClip(mask: UnityEditor.Animations.AvatarMask): void;
    ClearCurves(): void;
    GetCurveCount(): number;
    GetCurveProperty(index: number): UnityEditor.SerializedProperty;
    GetCurveName(index: number): string;
    SetCurveName(index: number, name: string): void;
    GetCurve(index: number): any;
    SetCurve(index: number, curveValue: any): void;
    AddCurve(): void;
    RemoveCurve(index: number): void;
    GetEvent(index: number): any;
    SetEvent(index: number, animationEvent: any): void;
    ClearEvents(): void;
    GetEventCount(): number;
    AddEvent(time: number): void;
    RemoveEvent(index: number): void;
    SetEvents(newEvents: any[]): void;
    GetEvents(): any[];
    AssignToPreviewClip(clip: any): void;
    ExtractFromPreviewClip(clip: any): void;
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
