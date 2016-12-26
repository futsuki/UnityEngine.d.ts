declare namespace UnityEngine {
  class AndroidJavaClass {
    // constructors
    constructor(className: string);
    // methods
    Dispose(): void;
    Call(methodName: string, args: any[]): void;
    CallStatic(methodName: string, args: any[]): void;
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
