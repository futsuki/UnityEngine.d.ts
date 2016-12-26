declare namespace UnityEngine.VR.WSA.WorldManager {
  class OnPositionalLocatorStateChangedDelegate {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(oldState: UnityEngine.VR.WSA.PositionalLocatorState, newState: UnityEngine.VR.WSA.PositionalLocatorState): void;
    BeginInvoke(oldState: UnityEngine.VR.WSA.PositionalLocatorState, newState: UnityEngine.VR.WSA.PositionalLocatorState, callback: any, object: any): any;
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
