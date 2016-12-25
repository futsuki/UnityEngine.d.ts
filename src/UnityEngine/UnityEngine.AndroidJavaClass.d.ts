declare namespace UnityEngine {
  class AndroidJavaClass {
    // constructors
    constructor(className: string);
    // methods
    Dispose(): any;
    Call(methodName: string, args: any[]): any;
    CallStatic(methodName: string, args: any[]): any;
    GetRawObject(): any;
    GetRawClass(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
