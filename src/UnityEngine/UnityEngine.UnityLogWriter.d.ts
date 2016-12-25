declare namespace UnityEngine {
  class UnityLogWriter {
    // constructors
    constructor();
    // methods
    static WriteStringToUnityLog(s: string): any;
    static Init(): any;
    Write(value: any): any;
    Write(s: string): any;
    Close(): any;
    Dispose(): any;
    Flush(): any;
    Write(value: boolean): any;
    Write(buffer: any[]): any;
    Write(value: number): any;
    Write(value: number): any;
    Write(value: number): any;
    Write(value: number): any;
    Write(value: any): any;
    Write(value: number): any;
    Write(value: number): any;
    Write(value: number): any;
    Write(format: string, arg0: any): any;
    Write(format: string, arg: any[]): any;
    Write(buffer: any[], index: number, count: number): any;
    Write(format: string, arg0: any, arg1: any): any;
    Write(format: string, arg0: any, arg1: any, arg2: any): any;
    WriteLine(): any;
    WriteLine(value: boolean): any;
    WriteLine(value: any): any;
    WriteLine(buffer: any[]): any;
    WriteLine(value: number): any;
    WriteLine(value: number): any;
    WriteLine(value: number): any;
    WriteLine(value: number): any;
    WriteLine(value: any): any;
    WriteLine(value: number): any;
    WriteLine(value: string): any;
    WriteLine(value: number): any;
    WriteLine(value: number): any;
    WriteLine(format: string, arg0: any): any;
    WriteLine(format: string, arg: any[]): any;
    WriteLine(buffer: any[], index: number, count: number): any;
    WriteLine(format: string, arg0: any, arg1: any): any;
    WriteLine(format: string, arg0: any, arg1: any, arg2: any): any;
    CreateObjRef(requestedType: any): any;
    GetLifetimeService(): any;
    InitializeLifetimeService(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Encoding: any;
    readonly FormatProvider: any;
    NewLine: string;
    // fields
  }
}
