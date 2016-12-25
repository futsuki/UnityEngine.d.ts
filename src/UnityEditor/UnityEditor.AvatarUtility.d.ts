declare namespace UnityEditor {
  class AvatarUtility {
    // constructors
    constructor();
    // methods
    static SetHumanPose(animator: any, dof: number[]): any;
    static HumanGetColliderTransform(avatar: any, index: number, boneX: UnityEditor.TransformX, colliderX: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
