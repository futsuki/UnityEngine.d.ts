declare namespace UnityEditor {
  class ModelImporterClipAnimation extends System.Object {
    // constructors
    constructor();
    // methods
    ConfigureMaskFromClip(mask: any): void;
    ConfigureClipFromMask(mask: UnityEditor.Animations.AvatarMask): void;
    Equals(o: any): boolean;
    GetHashCode(): number;
    // properties
    takeName: string;
    name: string;
    firstFrame: number;
    lastFrame: number;
    wrapMode: any;
    loop: boolean;
    rotationOffset: number;
    heightOffset: number;
    cycleOffset: number;
    loopTime: boolean;
    loopPose: boolean;
    lockRootRotation: boolean;
    lockRootHeightY: boolean;
    lockRootPositionXZ: boolean;
    keepOriginalOrientation: boolean;
    keepOriginalPositionY: boolean;
    keepOriginalPositionXZ: boolean;
    heightFromFeet: boolean;
    mirror: boolean;
    maskType: UnityEditor.ClipAnimationMaskType;
    maskSource: UnityEditor.Animations.AvatarMask;
    events: any[];
    curves: UnityEditor.ClipAnimationInfoCurve[];
    readonly maskNeedsUpdating: boolean;
    additiveReferencePoseFrame: number;
    hasAdditiveReferencePose: boolean;
    // fields
  }
}
