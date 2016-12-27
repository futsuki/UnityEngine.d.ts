declare namespace UnityEngine {
  class AvatarBuilder extends System.Object {
    // constructors
    constructor();
    // methods
    static BuildHumanAvatar(go: UnityEngine.GameObject, humanDescription: UnityEngine.HumanDescription): UnityEngine.Avatar;
    static BuildGenericAvatar(go: UnityEngine.GameObject, rootMotionTransformName: string): UnityEngine.Avatar;
    // properties
    // fields
  }
}
