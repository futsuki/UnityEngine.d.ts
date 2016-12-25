declare namespace UnityEngine {
  class HumanDescription {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    upperArmTwist: number;
    lowerArmTwist: number;
    upperLegTwist: number;
    lowerLegTwist: number;
    armStretch: number;
    legStretch: number;
    feetSpacing: number;
    hasTranslationDoF: boolean;
    // fields
    human: UnityEngine.HumanBone[];
    skeleton: UnityEngine.SkeletonBone[];
  }
}
