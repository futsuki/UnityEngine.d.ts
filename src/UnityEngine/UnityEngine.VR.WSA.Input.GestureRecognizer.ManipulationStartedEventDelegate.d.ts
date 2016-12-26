declare namespace UnityEngine.VR.WSA.Input.GestureRecognizer {
  class ManipulationStartedEventDelegate {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(source: UnityEngine.VR.WSA.Input.InteractionSourceKind, cumulativeDelta: UnityEngine.Vector3, headRay: UnityEngine.Ray): void;
    BeginInvoke(source: UnityEngine.VR.WSA.Input.InteractionSourceKind, cumulativeDelta: UnityEngine.Vector3, headRay: UnityEngine.Ray, callback: any, object: any): any;
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
