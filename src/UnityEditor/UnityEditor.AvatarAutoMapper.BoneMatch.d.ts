declare namespace UnityEditor.AvatarAutoMapper {
  class BoneMatch {
    // constructors
    constructor(parent: UnityEditor.AvatarAutoMapper.BoneMatch, bone: any, item: UnityEditor.AvatarAutoMapper.BoneMappingItem);
    // methods
    CompareTo(other: UnityEditor.AvatarAutoMapper.BoneMatch): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly humanBoneParent: UnityEditor.AvatarAutoMapper.BoneMatch;
    readonly totalSiblingScore: number;
    // fields
    parent: UnityEditor.AvatarAutoMapper.BoneMatch;
    children: any;
    doMap: boolean;
    item: UnityEditor.AvatarAutoMapper.BoneMappingItem;
    bone: any;
    score: number;
    siblingScore: number;
    debugTracker: any;
  }
}
