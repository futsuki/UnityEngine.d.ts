declare namespace UnityEngine.VR.WSA.Input {
  class InteractionManager {
    // constructors
    constructor();
    // methods
    static GetCurrentReading(sourceStates: UnityEngine.VR.WSA.Input.InteractionSourceState[]): number;
    static GetCurrentReading(): UnityEngine.VR.WSA.Input.InteractionSourceState[];
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly numSourceStates: number;
    // fields
  }
}
