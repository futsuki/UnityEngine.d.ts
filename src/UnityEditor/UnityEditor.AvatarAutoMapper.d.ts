declare namespace UnityEditor {
  class AvatarAutoMapper {
    // constructors
    constructor(validBones: any);
    // methods
    static InitGlobalMappingData(): any;
    static MapBones(root: any, validBones: any): any;
    MapBones(root: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
