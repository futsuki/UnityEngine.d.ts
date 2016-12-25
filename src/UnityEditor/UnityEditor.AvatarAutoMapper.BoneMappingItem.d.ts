declare namespace UnityEditor.AvatarAutoMapper {
  class BoneMappingItem {
    // constructors
    private constructor();
    // methods
    GetChildren(mappingData: UnityEditor.AvatarAutoMapper.BoneMappingItem[]): number[];
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
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
