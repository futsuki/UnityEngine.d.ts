declare namespace UnityEngine.AudioSettings {
  class AudioConfigurationChangeHandler {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(deviceWasChanged: boolean): any;
    BeginInvoke(deviceWasChanged: boolean, callback: any, object: any): any;
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
