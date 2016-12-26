declare namespace UnityEngine {
  class HumanPoseHandler {
    // constructors
    constructor(avatar: UnityEngine.Avatar, root: UnityEngine.Transform);
    // methods
    Dispose(): void;
    GetHumanPose(humanPose: any): void;
    SetHumanPose(humanPose: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
