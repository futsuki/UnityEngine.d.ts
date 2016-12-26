declare namespace UnityEngine.VR.WSA.Input.InteractionManager {
  class SourceEventHandler {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(state: UnityEngine.VR.WSA.Input.InteractionSourceState): void;
    BeginInvoke(state: UnityEngine.VR.WSA.Input.InteractionSourceState, callback: any, object: any): any;
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
