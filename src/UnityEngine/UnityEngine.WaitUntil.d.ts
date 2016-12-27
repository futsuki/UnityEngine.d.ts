declare namespace UnityEngine {
  class WaitUntil extends UnityEngine.CustomYieldInstruction {
    // constructors
    constructor(predicate: (() => boolean));
    // methods
    // properties
    readonly keepWaiting: boolean;
    // fields
  }
}
