declare namespace UnityEditor.AvatarAutoMapper {
  class BoneMatch extends System.Object {
    // constructors
    constructor(parent: UnityEditor.AvatarAutoMapper.BoneMatch, bone: any, item: UnityEditor.AvatarAutoMapper.BoneMappingItem);
    // methods
    CompareTo(other: UnityEditor.AvatarAutoMapper.BoneMatch): number;
    // properties
    readonly humanBoneParent: UnityEditor.AvatarAutoMapper.BoneMatch;
    readonly totalSiblingScore: number;
    // fields
    parent: UnityEditor.AvatarAutoMapper.BoneMatch;
    children: UnityEditor.AvatarAutoMapper.BoneMatch[];
    doMap: boolean;
    item: UnityEditor.AvatarAutoMapper.BoneMappingItem;
    bone: any;
    score: number;
    siblingScore: number;
    debugTracker: string[];
  }
}
