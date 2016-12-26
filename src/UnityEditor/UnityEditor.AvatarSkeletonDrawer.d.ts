declare namespace UnityEditor {
  class AvatarSkeletonDrawer {
    // constructors
    constructor();
    // methods
    static DrawSkeleton(reference: any, actualBones: any): void;
    static DrawSkeleton(reference: any, actualBones: any, bones: UnityEditor.AvatarSetupTool.BoneWrapper[]): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
