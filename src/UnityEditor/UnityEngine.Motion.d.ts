declare namespace UnityEngine {
  class Motion extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    ValidateIfRetargetable(val: boolean): boolean;
    // properties
    readonly averageDuration: number;
    readonly averageAngularSpeed: number;
    readonly averageSpeed: any;
    readonly apparentSpeed: number;
    readonly isLooping: boolean;
    readonly legacy: boolean;
    readonly isHumanMotion: boolean;
    readonly isAnimatorMotion: boolean;
    // fields
  }
}
