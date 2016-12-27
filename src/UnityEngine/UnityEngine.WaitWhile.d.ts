declare namespace UnityEngine {
  class WaitWhile extends UnityEngine.CustomYieldInstruction {
    // constructors
    constructor(predicate: (() => boolean));
    // methods
    // properties
    readonly keepWaiting: boolean;
    // fields
  }
}
