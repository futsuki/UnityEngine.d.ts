declare namespace UnityEditor.AvatarAutoMapper {
  class BoneMappingItem extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    GetChildren(mappingData: UnityEditor.AvatarAutoMapper.BoneMappingItem[]): number[];
    // properties
    // fields
    parent: number;
    bone: number;
    minStep: number;
    maxStep: number;
    lengthRatio: number;
    dir: any;
    side: UnityEditor.AvatarAutoMapper.Side;
    optional: boolean;
    alwaysInclude: boolean;
    keywords: string[];
  }
}
