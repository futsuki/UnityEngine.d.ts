declare namespace UnityEditorInternal {
  class State extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    GetMotion(): UnityEngine.Motion;
    GetMotion(layer: UnityEditorInternal.AnimatorControllerLayer): UnityEngine.Motion;
    CreateBlendTree(): UnityEditorInternal.BlendTree;
    CreateBlendTree(layer: UnityEditorInternal.AnimatorControllerLayer): UnityEditorInternal.BlendTree;
    // properties
    readonly uniqueName: string;
    readonly uniqueNameHash: number;
    speed: number;
    mirror: boolean;
    iKOnFeet: boolean;
    tag: string;
    // fields
  }
}
