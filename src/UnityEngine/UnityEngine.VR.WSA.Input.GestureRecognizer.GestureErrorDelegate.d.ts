declare namespace UnityEngine.VR.WSA.Input.GestureRecognizer {
  class GestureErrorDelegate {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(error: string, hresult: number): void;
    BeginInvoke(error: string, hresult: number, callback: any, object: any): any;
    EndInvoke(result: any): void;
    GetObjectData(info: any, context: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetInvocationList(): any[];
    DynamicInvoke(args: any[]): any;
    Clone(): any;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Method: any;
    readonly Target: any;
    // fields
  }
}
