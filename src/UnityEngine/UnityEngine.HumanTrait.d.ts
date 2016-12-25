declare namespace UnityEngine {
  class HumanTrait {
    // constructors
    constructor();
    // methods
    static MuscleFromBone(i: number, dofIndex: number): number;
    static BoneFromMuscle(i: number): number;
    static RequiredBone(i: number): boolean;
    static GetMuscleDefaultMin(i: number): number;
    static GetMuscleDefaultMax(i: number): number;
    static GetParentBone(i: number): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly MuscleCount: number;
    static readonly MuscleName: string[];
    static readonly BoneCount: number;
    static readonly BoneName: string[];
    static readonly RequiredBoneCount: number;
    // fields
  }
}
