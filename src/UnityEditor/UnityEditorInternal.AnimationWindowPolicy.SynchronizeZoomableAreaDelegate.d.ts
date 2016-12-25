declare namespace UnityEditorInternal.AnimationWindowPolicy {
  class SynchronizeZoomableAreaDelegate {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(horizontalScale: any, horizontalTranslation: any): boolean;
    BeginInvoke(horizontalScale: any, horizontalTranslation: any, callback: any, object: any): any;
    EndInvoke(horizontalScale: any, horizontalTranslation: any, result: any): boolean;
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
