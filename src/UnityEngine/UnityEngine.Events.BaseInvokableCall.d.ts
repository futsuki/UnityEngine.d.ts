declare namespace UnityEngine.Events {
  class BaseInvokableCall {
    // constructors
    private constructor();
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
