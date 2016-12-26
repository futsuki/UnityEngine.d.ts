declare namespace UnityEditor {
  class AvatarAutoMapper {
    // constructors
    constructor(validBones: any);
    // methods
    static InitGlobalMappingData(): void;
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
