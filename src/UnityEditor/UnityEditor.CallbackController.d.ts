declare namespace UnityEditor {
  class CallbackController {
    // constructors
    constructor(callback: any, callbacksPerSecond: number);
    // methods
    Start(): void;
    Stop(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly active: boolean;
    // fields
  }
}
