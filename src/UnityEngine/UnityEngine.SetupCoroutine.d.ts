declare namespace UnityEngine {
  class SetupCoroutine {
    // constructors
    constructor();
    // methods
    static InvokeMoveNext(enumerator: any, returnValueAddress: any): void;
    static InvokeMember(behaviour: any, name: string, variable: any): any;
    static InvokeStatic(klass: any, name: string, variable: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
