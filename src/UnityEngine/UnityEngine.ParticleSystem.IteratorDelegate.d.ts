declare namespace UnityEngine.ParticleSystem {
  class IteratorDelegate {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(ps: UnityEngine.ParticleSystem): boolean;
    BeginInvoke(ps: UnityEngine.ParticleSystem, callback: any, object: any): any;
    EndInvoke(result: any): boolean;
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
