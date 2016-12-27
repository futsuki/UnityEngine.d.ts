declare namespace UnityEngine.Events {
  class InvokableCall extends UnityEngine.Events.BaseInvokableCall {
    // constructors
    constructor(target: any, theFunction: any);
    constructor(action: (() => void));
    // methods
    Invoke(args: any[]): void;
    Find(targetObj: any, method: any): boolean;
    // properties
    // fields
  }
}
