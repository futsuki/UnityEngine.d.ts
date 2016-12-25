declare namespace UnityEditorInternal {
  class State {
    // constructors
    constructor();
    // methods
    GetMotion(): UnityEngine.Motion;
    GetMotion(layer: UnityEditorInternal.AnimatorControllerLayer): UnityEngine.Motion;
    CreateBlendTree(): UnityEditorInternal.BlendTree;
    CreateBlendTree(layer: UnityEditorInternal.AnimatorControllerLayer): UnityEditorInternal.BlendTree;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly uniqueName: string;
    readonly uniqueNameHash: number;
    speed: number;
    mirror: boolean;
    iKOnFeet: boolean;
    tag: string;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
