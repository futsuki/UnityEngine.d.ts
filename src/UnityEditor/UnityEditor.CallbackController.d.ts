declare namespace UnityEditor {
  class CallbackController extends System.Object {
    // constructors
    constructor(callback: (() => void), callbacksPerSecond: number);
    // methods
    Start(): void;
    Stop(): void;
    // properties
    readonly active: boolean;
    // fields
  }
}
