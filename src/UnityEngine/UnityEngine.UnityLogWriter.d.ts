declare namespace UnityEngine {
  class UnityLogWriter extends System.IO.TextWriter {
    // constructors
    constructor();
    // methods
    static WriteStringToUnityLog(s: string): void;
    static Init(): void;
    Write(value: any): void;
    Write(s: string): void;
    Write(value: boolean): void;
    Write(buffer: any[]): void;
    Write(value: number): void;
    Write(value: number): void;
    Write(value: number): void;
    Write(value: number): void;
    Write(value: any): void;
    Write(value: number): void;
    Write(value: number): void;
    Write(value: number): void;
    Write(format: string, arg0: any): void;
    Write(format: string, arg: any[]): void;
    Write(buffer: any[], index: number, count: number): void;
    Write(format: string, arg0: any, arg1: any): void;
    Write(format: string, arg0: any, arg1: any, arg2: any): void;
    // properties
    readonly Encoding: any;
    // fields
  }
}
