declare namespace UnityEngine.Events {
  class InvokableCallList {
    // constructors
    constructor();
    // methods
    AddPersistentInvokableCall(call: UnityEngine.Events.BaseInvokableCall): void;
    AddListener(call: UnityEngine.Events.BaseInvokableCall): void;
    RemoveListener(targetObj: any, method: any): void;
    Clear(): void;
    ClearPersistent(): void;
    Invoke(parameters: any[]): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Count: number;
    // fields
  }
}
