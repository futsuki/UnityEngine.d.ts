declare namespace UnityEditor {
  class CallbackController {
    // constructors
    constructor(callback: any, callbacksPerSecond: number);
    // methods
    Start(): any;
    Stop(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly active: boolean;
    // fields
  }
}
