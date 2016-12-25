declare namespace UnityEngine.VR.WSA.Input {
  class InteractionSourceProperties {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    readonly sourceLossRisk: number;
    readonly sourceLossMitigationDirection: UnityEngine.Vector3;
    readonly location: UnityEngine.VR.WSA.Input.InteractionSourceLocation;
    // fields
  }
}
