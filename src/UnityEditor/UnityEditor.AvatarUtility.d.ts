declare namespace UnityEditor {
  class AvatarUtility {
    // constructors
    constructor();
    // methods
    static SetHumanPose(animator: any, dof: number[]): void;
    static HumanGetColliderTransform(avatar: any, index: number, boneX: UnityEditor.TransformX, colliderX: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
