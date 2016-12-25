declare namespace UnityEngine.VR.WSA.Sharing.WorldAnchorTransferBatch {
  class SerializationCompleteDelegate {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(completionReason: UnityEngine.VR.WSA.Sharing.SerializationCompletionReason): any;
    BeginInvoke(completionReason: UnityEngine.VR.WSA.Sharing.SerializationCompletionReason, callback: any, object: any): any;
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
