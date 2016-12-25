declare namespace UnityEngine {
  class AnimatorControllerParameter {
    // constructors
    constructor();
    // methods
    Equals(o: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    name: string;
    readonly nameHash: number;
    type: UnityEngine.AnimatorControllerParameterType;
    defaultFloat: number;
    defaultInt: number;
    defaultBool: boolean;
    // fields
  }
}
