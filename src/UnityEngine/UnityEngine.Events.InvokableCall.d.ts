declare namespace UnityEngine.Events {
  class InvokableCall {
    // constructors
    constructor(target: any, theFunction: any);
    constructor(action: UnityEngine.Events.UnityAction);
    // methods
    Invoke(args: any[]): void;
    Find(targetObj: any, method: any): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
