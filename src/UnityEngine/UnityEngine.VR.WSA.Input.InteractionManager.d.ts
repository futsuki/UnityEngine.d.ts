declare namespace UnityEngine.VR.WSA.Input {
  class InteractionManager extends System.Object {
    // constructors
    constructor();
    // methods
    static GetCurrentReading(sourceStates: UnityEngine.VR.WSA.Input.InteractionSourceState[]): number;
    static GetCurrentReading(): UnityEngine.VR.WSA.Input.InteractionSourceState[];
    // properties
    static readonly numSourceStates: number;
    // fields
  }
}
