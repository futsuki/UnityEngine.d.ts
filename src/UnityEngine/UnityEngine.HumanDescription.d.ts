declare namespace UnityEngine {
  class HumanDescription extends System.ValueType {
    // constructors
    protected constructor();
    // methods
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
