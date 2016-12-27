declare namespace UnityEngine {
  class AndroidJavaObject extends System.Object {
    // constructors
    constructor(className: string, args: any[]);
    // methods
    Dispose(): void;
    Call(methodName: string, args: any[]): void;
    CallStatic(methodName: string, args: any[]): void;
    GetRawObject(): any;
    GetRawClass(): any;
    // properties
    // fields
  }
}
