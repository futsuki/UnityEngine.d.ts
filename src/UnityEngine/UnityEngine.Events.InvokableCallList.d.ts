declare namespace UnityEngine.Events {
  class InvokableCallList {
    // constructors
    constructor();
    // methods
    AddPersistentInvokableCall(call: UnityEngine.Events.BaseInvokableCall): any;
    AddListener(call: UnityEngine.Events.BaseInvokableCall): any;
    RemoveListener(targetObj: any, method: any): any;
    Clear(): any;
    ClearPersistent(): any;
    Invoke(parameters: any[]): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Count: number;
    // fields
  }
}
