declare namespace UnityEngine.Events {
  class InvokableCallList extends System.Object {
    // constructors
    constructor();
    // methods
    AddPersistentInvokableCall(call: UnityEngine.Events.BaseInvokableCall): void;
    AddListener(call: UnityEngine.Events.BaseInvokableCall): void;
    RemoveListener(targetObj: any, method: any): void;
    Clear(): void;
    ClearPersistent(): void;
    Invoke(parameters: any[]): void;
    // properties
    readonly Count: number;
    // fields
  }
}
