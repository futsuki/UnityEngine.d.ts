declare namespace UnityEngine.VR.WSA.Input.InteractionManager {
  class InternalSourceEventHandler {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(eventType: UnityEngine.VR.WSA.Input.InteractionManager.EventType, state: UnityEngine.VR.WSA.Input.InteractionSourceState): any;
    BeginInvoke(eventType: UnityEngine.VR.WSA.Input.InteractionManager.EventType, state: UnityEngine.VR.WSA.Input.InteractionSourceState, callback: any, object: any): any;
    EndInvoke(result: any): any;
    GetObjectData(info: any, context: any): any;
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
