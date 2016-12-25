declare namespace UnityEditor {
  class AnimationClipSettings {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    additiveReferencePoseClip: any;
    additiveReferencePoseTime: number;
    startTime: number;
    stopTime: number;
    orientationOffsetY: number;
    level: number;
    cycleOffset: number;
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
  }
}
